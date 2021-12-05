import styled from "styled-components";

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.padding.row};
  width: 100%;
`;

export default Container;
