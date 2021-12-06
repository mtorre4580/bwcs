import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.padding.row};
`;

export default Container;
