import styled from 'styled-components';

const Preloader = () => (
  <Wrapper>
    <svg x={`0px`} y={`0px`} viewBox={`0 0 48 48`}>
      <path d={`M24, 3c12, 0, 21, 10, 21, 21S36, 45, 24, 45S3, 36, 3, 24`} />
    </svg>
  </Wrapper>
);

const Wrapper = styled.div`
  margin: 0 auto;
  width: 48px;
  svg {
    animation: rotate 1s normal linear infinite;
    path {
      fill: none;
      stroke: var(--secondaryColor);
      stroke-width: 6;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    25% {
      transform: rotate3d(0, 0, 1, 90deg);
    }
    50% {
      transform: rotate3d(0, 0, 1, 180deg);
    }
    75% {
      transform: rotate3d(0, 0, 1, 270deg);
    }
    100% {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
`;

export default Preloader;
