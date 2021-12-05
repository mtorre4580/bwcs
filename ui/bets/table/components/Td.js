import styled from "styled-components";

const Td = styled.td`
  padding: ${({ theme }) => theme.padding.button};
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export default Td;
