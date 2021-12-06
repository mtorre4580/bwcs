import styled from "styled-components";

const Slider = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  > img {
    margin: ${({ theme }) => theme.margin.row};
  }
`;

export default Slider;
