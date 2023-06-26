import styled from 'styled-components';

const Top = styled.div`
  display: flex;
  margin: 1.5rem 0 2.5rem;
  justify-content: space-between;
  border-width: 0 0 3px 0;
  border-style: solid;
  border-color: var(--black);
`;
const Bottom = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-between;
  margin-bottom: 2rem;
  h2 {
    color: var(--sub3);
    width: 15rem;
    text-align: end;
  }
  div {
    text-align: end;
    small {
      display: block;
      color: var(--sub3);
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }
    p {
      color: var(--sub3);
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

type Props = {
  name: string;
  career: number;
  score: number;
  introduce: string;
  icon: string;
};
const CounselorDetail = ({ name, career, score, introduce, icon }: Props) => {
  return (
    <div>
      <Top>
        <Image src={process.env.PUBLIC_URL + `/assets/counselor_5.png`} />
        <Profile>
          <h2>{introduce}</h2>
          <div>
            <small>🌟 {score}점 (5.0)</small>
            <p>전문 상담사 {career}년</p>
            <h1>{name}</h1>
          </div>
        </Profile>
      </Top>
      <Bottom>
        <div>
          <h3>{name} 상담사의 강점</h3>
          <p>업데이트 예정입니다</p>
        </div>
        <div>
          <h3>이런 사람에게 추천해요!</h3>
          <p>업데이트 예정입니다</p>
        </div>
        <div>
          <h3>심리상담 효과</h3>
          <p>업데이트 예정입니다</p>
        </div>
      </Bottom>
    </div>
  );
};

export default CounselorDetail;
