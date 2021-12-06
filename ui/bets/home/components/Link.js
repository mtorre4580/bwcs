import styled from "styled-components";

const Link = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.row};
`;

export default Link;