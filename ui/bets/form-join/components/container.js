import styled from "styled-components";
import theme from "../../../../styles/theme";

const Container = styled.div`
  padding: ${({ theme }) => theme.padding.button} 0;

  @media ${theme.devices.tablet} {
    width: 50%;
    margin: auto;
  }
`;

export default Container;
