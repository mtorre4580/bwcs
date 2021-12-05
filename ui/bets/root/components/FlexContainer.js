import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  padding-bottom: ${({ theme }) => theme.padding.row};
`;

export default FlexContainer;
