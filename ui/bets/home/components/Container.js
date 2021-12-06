import styled from "styled-components";
import theme from "../../../../styles/theme";

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.padding.row};
  width: 100%;

  @media ${theme.devices.tablet} {
    padding-top: ${({ theme }) => theme.padding.row};
    overflow-y: scroll;
    height: 900px;
  }
`;

export default Container;
