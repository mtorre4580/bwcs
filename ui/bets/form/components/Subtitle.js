import styled from "styled-components";

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  text-transform: capitalize;
  margin: ${({ theme }) => theme.margin.row};
`;

export default Subtitle;
