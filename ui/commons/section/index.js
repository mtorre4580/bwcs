import styled from "styled-components";
import theme from "../../../styles/theme";

const Section = styled.section`
  padding-top: 40px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  
  @media ${theme.devices.tablet} {
    padding-top: 0;
  }
`;

export default Section;
