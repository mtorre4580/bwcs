import styled from "styled-components";
import theme from "../../../../styles/theme";

const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  width: 100%;

  @media ${theme.devices.desktop} {
    width: 250px;
  }
`;

export default Container;
