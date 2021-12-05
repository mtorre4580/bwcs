import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../commons/button";
import {
  Container,
  FlexContainer,
  Slider,
  Subtitle,
  Title,
  ImageContainer,
} from "./components";
import flags from "../../../utils/flags";

const Form = ({ onSubmit }) => {
  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);

  // validate is any selected flag
  const isSelected = (flag) => {
    return teamA === flag || teamB === flag;
  };

  // handle click to select teamsA, teamB, similar toggle action
  const handleOnClick = (flag) => {
    if (isSelected(flag)) {
      if (flag === teamA) {
        setTeamA(null);
      }
      if (flag === teamB) {
        setTeamB(null);
      }
    } else {
      if (teamA) {
        setTeamB(flag);
      } else {
        setTeamA(flag);
      }
    }
  };

  // handle submit event and call the onSubmit with the payload to init the contract
  const handleOnSubmit = () => {
    if (teamA && teamB) {
      onSubmit({
        teamA: teamA.toUpperCase(),
        teamB: teamB.toUpperCase(),
      });
    } else {
      toast.error("No selected teams");
    }
  };

  return (
    <>
      <Container>
        <Title>Pick teams</Title>
        <Slider>
          {flags.map((flag, index) => (
            <ImageContainer
              key={index}
              onClick={() => handleOnClick(flag)}
              selected={isSelected(flag)}
            >
              <Image
                src={`/assets/flags/${flag}.svg`}
                width="64px"
                height="64px"
                alt={`flag ${flag}`}
              />
            </ImageContainer>
          ))}
        </Slider>
        <FlexContainer>
          {teamA && (
            <FlexContainer>
              <Image
                src={`/assets/flags/${teamA}.svg`}
                width="64px"
                height="64px"
                alt={`flag ${teamA}`}
              />
              <Subtitle>{teamA}</Subtitle>
            </FlexContainer>
          )}
          {teamB && (
            <FlexContainer>
              <Image
                src={`/assets/flags/${teamB}.svg`}
                width="64px"
                height="64px"
                alt={`flag ${teamB}`}
              />
              <Subtitle>{teamB}</Subtitle>
            </FlexContainer>
          )}
        </FlexContainer>
        <Button onClick={handleOnSubmit}>Confirm</Button>
      </Container>
      <Toaster />
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(Form);
