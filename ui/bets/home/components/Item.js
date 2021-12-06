import styled from "styled-components";

const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.border.radius};
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.principal};
    box-shadow: ${({ theme }) => theme.shadow.row};
    cursor: pointer;
  }
`;

export default Item;
