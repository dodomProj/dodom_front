import styled from 'styled-components';
import { SubtitleText } from '../SubtitleBox';
import { SubtitleContainer } from '../ToDiary';

const Container = styled(SubtitleContainer)`
  background-color: var(--black);
  color: var(--white);
`;
const PolicySubtitle = () => {
  return (
    <Container>
      <SubtitleText>
        <div>
          <h1>
            내가 지원받을 수 있는
            <br />
            정책과 사업 한눈에 보기
          </h1>
          <p>DODOM과 함께 내가 지원 받을 수 있는 정책과 사업을 알아보아요!</p>
        </div>
      </SubtitleText>
      <img src="" alt="" />
    </Container>
  );
};

export default PolicySubtitle;
