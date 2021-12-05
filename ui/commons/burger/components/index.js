import styled from "styled-components";
import theme from "../../../../styles/theme";

const Container = styled.button`
  position: absolute;
  top: 20px;
  left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  z-index: 10;

  span {
    width: 20px;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.colors.white : theme.colors.principal};
    border-radius: ${({ theme }) => theme.border.radius};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Container;
