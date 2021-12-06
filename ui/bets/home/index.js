import React, { useEffect, useState, memo, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import NextLink from "next/link";
import Image from "next/image";
import BetCreator from "../../../build/contracts/BetCreator.json";
import { ADDRESS } from "../../../utils/contract";
import useWeb3 from "../../../hooks/useWeb3";
import useCurrentAccount from "../../../hooks/useCurrentAccount";
import Button from "../../commons/button";
import Loader from "../../commons/loader";
import Modal from "../../commons/modal";
import FormCreate from "../form-create";
import {
  Container,
  Title,
  FlexContainer,
  Link,
  List,
  Item,
} from "./components";

const PageBetsRoot = () => {
  const [bets, setBets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contract, setContract] = useState(null);
  const account = useCurrentAccount();
  const web3 = useWeb3();

  // Get the current bets created by the factory contract..
  const retrieveBetsFromContract = useCallback(async () => {
    if (contract) {
      try {
        setLoading(true);
        const currentBets = await contract.methods.getDeployedBets().call();
        setBets(currentBets);
      } catch (err) {
        toast.error("Error to retrieve all the bets");
      } finally {
        setLoading(false);
      }
    }
  }, [contract]);

  // handle onSubmit event form and create the new contract
  const handleOnSubmit = async ({ teamA, teamB }) => {
    handleOnModal();
    try {
      setLoading(true);
      await contract.methods.newBet(teamA, teamB).send({
        from: account,
      });
      toast.success("Created successfully");
      retrieveBetsFromContract();
    } catch (err) {
      toast.error("Error to create the new bet");
    } finally {
      setLoading(false);
    }
  };

  // effect to retrieve the current bets from the contract factory
  useEffect(() => {
    retrieveBetsFromContract();
  }, [retrieveBetsFromContract]);

  // effect to create the instance of the contract
  useEffect(() => {
    if (web3) {
      const newContract = new web3.eth.Contract(
        BetCreator.abi,
        ADDRESS.BET_CREATOR
      );
      setContract(newContract);
    }
  }, [web3]);

  // handler for the modal (open | close)
  const handleOnModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Container>
        <FlexContainer>
          <Title>Current bets</Title>
          <Button onClick={handleOnModal}>Create</Button>
        </FlexContainer>
        {bets && bets.length > 0 && (
          <List>
            {bets.map((bet) => (
              <Item key={bet}>
                <NextLink href={`detail/${bet}`} passHref>
                  <Link>
                    {bet}
                    <Image
                      src="/assets/arrow-right.svg"
                      alt="right"
                      height="24px"
                      width="24px"
                    />
                  </Link>
                </NextLink>
              </Item>
            ))}
          </List>
        )}
      </Container>
      {loading && <Loader />}
      <Toaster />
      <Modal open={isModalOpen} onClose={handleOnModal}>
        <FormCreate onSubmit={handleOnSubmit} />
      </Modal>
    </>
  );
};

export default memo(PageBetsRoot);
