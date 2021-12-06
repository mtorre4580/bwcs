import styled from "styled-components";

const Label = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
  margin: ${({ theme }) => theme.margin.row};
  text-align: center;
`;

export default Label;
