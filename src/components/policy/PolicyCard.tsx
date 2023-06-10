import styled from 'styled-components';

const Box = styled.article`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  > img {
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;
const Text = styled.div`
  padding: 1.25rem;

  > h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;
const MoreInfo = styled.a`
  display: block;
  font-size: 0.75rem;
  text-align: end;
  cursor: pointer;
`;
const PolicyCard = () => {
  return (
    <Box>
      <img src="/assets/anxiety.png" alt="" />
      <Text>
        <h3>제목</h3>
        <p>텍스트</p>
        <MoreInfo href="https://naver.com" target="_blank">
          자세히 알아보기
        </MoreInfo>
      </Text>
    </Box>
  );
};

export default PolicyCard;
