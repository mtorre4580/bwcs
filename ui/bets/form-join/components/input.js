import styled from "styled-components";
import InputMask from 'react-input-mask';

const Input = styled(InputMask)`
  background-color: ${({ theme }) => theme.colors.light};
  border: 0;
  padding: ${({ theme }) => theme.padding.row};
  border-radius: ${({ theme }) => theme.border.radius};
  text-align: center;
  font-weight: 700;
  margin: ${({ theme }) => theme.margin.row} 0;
`;

export default Input;