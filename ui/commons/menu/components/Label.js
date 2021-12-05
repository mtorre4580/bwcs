import styled from "styled-components";

const Label = styled.p`
  color: ${({ theme }) => theme.colors.white};
  word-wrap: break-word;
  padding: ${({ theme }) => theme.padding.row};;
  text-align: center;
`;

export default Label;
