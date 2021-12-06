import styled from "styled-components";

const List = styled.ul`
  > li {
    margin: ${({ theme }) => theme.margin.row} 0;
  }
`;

export default List;
