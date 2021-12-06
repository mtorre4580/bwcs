import styled from "styled-components";

const Th = styled.th`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.padding.button};
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
`;

export default Th;
