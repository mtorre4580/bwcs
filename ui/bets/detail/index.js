import React, { useCallback, useEffect, useMemo, useState, memo } from "react";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import Bet from "../../../build/contracts/Bet.json";
import Loader from "../../commons/loader";
import useWeb3 from "../../../hooks/useWeb3";
import useCurrentAccount from "../../../hooks/useCurrentAccount";
import FormJoin from "../form-join";
import { Container, ContainerFlags, ContainerTeams, Label } from "./components";
import TableResults from "../table-results";

const PageDetailRoot = ({ contractAddress }) => {
  const account = useCurrentAccount();
  const web3 = useWeb3();
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [contract, setContract] = useState(null);
  const [teams, setTeams] = useState({ teamA: "", teamB: "" });
  const [gamblers, setGamblers] = useState([]);
  const showGamblers = useMemo(() => gamblers.length > 0, [gamblers]);
  const showTeams = useMemo(
    () => teams.teamA != "" && teams.teamB != "",
    [teams]
  );

  // util to convert value to ether
  const toEther = (value) => web3.utils.toWei(value, "ether");

  // util to convert wei to ether
  const toWei = (value) => web3.utils.fromWei(value, "ether");

  // retrieve if the user has joined in the contract
  const isJoined = useMemo(() => {
    if (gamblers.length > 0 && account) {
      return gamblers.find(
        (gambler) => gambler.user.toLowerCase() == account.toLowerCase()
      );
    }
  }, [account, gamblers]);

  // retrieve the current balance of this contract
  const getBalance = useCallback(async () => {
    if (contract) {
      try {
        setLoading(true);
        const currentBalance = await contract.methods.getBalance().call();
        setBalance(currentBalance);
      } catch (err) {
        toast.error("Error to retrieve the balance of the bet");
      } finally {
        setLoading(false);
      }
    }
  }, [contract]);

  // retrieve the current teams in this bet
  const getTeams = useCallback(async () => {
    if (contract) {
      try {
        setLoading(true);
        const [teamA, teamB] = await Promise.all([
          contract.methods.teamA().call(),
          contract.methods.teamB().call(),
        ]);
        setTeams({ teamA, teamB });
      } catch (err) {
        toast.error("Error to retrieve the teams in the bet");
      } finally {
        setLoading(false);
      }
    }
  }, [contract]);

  // retrieve the gamblers in this bet
  const getGamblers = useCallback(async () => {
    if (contract) {
      try {
        setLoading(true);
        const currentGamblers = await contract.methods.getGamblers().call();
        setGamblers(currentGamblers);
      } catch (err) {
        toast.error("Error to retrieve the gamblers");
      } finally {
        setLoading(false);
      }
    }
  }, [contract]);

  // handle to join and send the transaction to the contract
  const handleOnJoin = async (result) => {
    try {
      setLoading(true);
      await contract.methods.gamble(result).send({
        from: account,
        value: toEther("1"),
      });
      toast.success("Gamble successfully");
    } catch (err) {
      toast.error("Error to gamble");
    } finally {
      setLoading(false);
    }
  };

  // effect principal to retrieve all the data of the contract
  useEffect(() => {
    getBalance();
    getTeams();
    getGamblers();
  }, [contract, getBalance, getGamblers, getTeams]);

  // effect to create instance of the current contract by id
  useEffect(() => {
    if (contractAddress && web3) {
      const newContract = new web3.eth.Contract(Bet.abi, contractAddress);
      setContract(newContract);
    }
  }, [contractAddress, web3]);

  return (
    <>
      <Container>
        {showTeams && (
          <>
            <ContainerTeams>
              <ContainerFlags>
                <Image
                  src={`/assets/flags/${teams.teamA.toLowerCase()}.svg`}
                  width="64px"
                  height="64px"
                  alt={`flag ${teams.teamA}`}
                />
                <Image
                  src={`/assets/flags/${teams.teamB.toLowerCase()}.svg`}
                  width="64px"
                  height="64px"
                  alt={`flag ${teams.teamB}`}
                />
              </ContainerFlags>
              <Label textCenter>
                {teams.teamA} vs {teams.teamB}
              </Label>
            </ContainerTeams>
          </>
        )}
        {balance && <Label border>Balance: {toWei(balance)} ether</Label>}
        <Label border>Gamblers: {gamblers.length}</Label>
        {!isJoined && <FormJoin onSubmit={handleOnJoin} />}
        {isJoined && <Label>You have already bet</Label>}
        {showGamblers && <TableResults gamblers={gamblers} />}
        {!showGamblers && <Label>No gamblers in this bet</Label>}
      </Container>
      {loading && <Loader />}
      <Toaster />
    </>
  );
};

PageDetailRoot.propTypes = {
  contractAddress: PropTypes.string.isRequired,
};

export default memo(PageDetailRoot);
