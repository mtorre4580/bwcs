import styled from "styled-components";

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.row};
`;

export default Title;
