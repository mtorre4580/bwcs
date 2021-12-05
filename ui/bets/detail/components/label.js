import styled, { css } from "styled-components";

const Label = styled.h2`
  font-size: ${({ theme }) => theme.fonts.medium};
  padding: ${({ theme }) => theme.padding.row}
    ${({ theme }) => theme.padding.row} ${({ theme }) => theme.padding.row} 0;
  width: 100%;
  ${({ textCenter }) =>
    textCenter &&
    css`
      text-align: center;
    `}
  ${({ border }) =>
    border &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    `}
`;

export default Label;
