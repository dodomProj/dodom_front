import styled from 'styled-components';

const Rotate = styled.img`
  width: 6rem;
  animation: 1s linear infinite loading;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return <Rotate src="/assets/loading.png" alt="loading" />;
};

export default Loading;
