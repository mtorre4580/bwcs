import styled from "styled-components";
import Button from "../../button";
import theme from "../../../../styles/theme";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 3px ${({ theme }) => theme.colors.principal};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: ${({ theme }) => theme.padding.row};
  z-index: 11;
  animation-name: fadeIn;
  animation-duration: 0.3s;
  
  @media ${theme.devices.tablet} {
    margin: 10%;
  }

  > ${Button} {
    font-size: ${({ theme }) => theme.fonts.big};
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    border: none;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background-color: transparent;
    box-shadow: none;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Container;
