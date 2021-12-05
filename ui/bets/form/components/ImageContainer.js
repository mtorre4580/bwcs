import styled, { css } from "styled-components";

const ImageContainer = styled.div`
  margin: ${({ theme }) => theme.margin.row};
  padding: ${({ theme }) => theme.padding.button};
  ${({ selected }) =>
    selected &&
    css`
      border-radius: ${({ theme }) => theme.border.radius};
      background-color: ${({ theme }) => theme.colors.secondary};
    `}
  cursor: pointer;
`;

export default ImageContainer;
