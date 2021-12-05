import styled from "styled-components";

const Button = styled.button`
  border-radius: ${({ theme }) => theme.border.radius};
  padding: ${({ theme }) => theme.padding.button};
  border: 0;
  outline: none;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  min-width: 80px;
  box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fonts.medium};
  cursor: pointer;
`;

export default Button;
