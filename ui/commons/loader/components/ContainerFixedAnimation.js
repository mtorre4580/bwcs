import styled from "styled-components";

const ContainerFixedAnimation = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    height: 300px;
    display: block;
    margin: 0 auto;
    path {
      animation-duration: 1s;
      animation-name: pulse;
      animation-iteration-count: infinite;
      color: ${({ theme }) => theme.colors.principal};

      &.path-7 {
        animation-delay: -1s;
      }
      &.path-6 {
        animation-delay: -0.875s;
      }
      &.path-5 {
        animation-delay: -0.75s;
      }
      &.path-4 {
        animation-delay: -0.625s;
      }
      &.path-3 {
        animation-delay: -0.5s;
      }
      &.path-2 {
        animation-delay: -0.375s;
      }
      &.path-1 {
        animation-delay: -0.25s;
      }
      &.path-0 {
        animation-delay: -0.125s;
      }
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.1;
    }
    30% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.1;
    }
  }
`;

export default ContainerFixedAnimation;
