import styled from 'styled-components';

const Top = styled.div`
  display: flex;
  margin: 1.5rem 0 2.5rem 0;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: flex-end;
  border-width: 0 0 3px 0;
  border-style: solid;
  border-color: var(--black);
`;
const Bottom = styled.div`
  padding: 0 2.5rem;
  div {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 18px;
    margin-bottom: 2.5rem;
  }
`;
const Image = styled.div`
  width: 50rem;
  overflow: hidden;
  img {
    position: relative;
    left: -6rem;
    top: 1rem;
  }
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  justify-content: space-between;
  padding-right: 1rem;
  h2 {
    color: var(--sub3);
    width: 15rem;
    text-align: end;
    margin-top: 1rem;
  }
  div {
    text-align: end;
    margin-bottom: 2rem;
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
  year: number;
  score: number;
  intro: string;
  img: string;
  pros: string;
  recommend: string;
  effect: string;
};
const CounselorDetail = ({
  name,
  year,
  score,
  intro,
  img,
  pros,
  recommend,
  effect,
}: Props) => {
  return (
    <>
      <Top>
        <Image>
          <img src={process.env.PUBLIC_URL + `/assets/${img}`} />
        </Image>
        <Profile>
          <h2>{intro}</h2>
          <div>
            <small>🌟 {score}점 (5.0)</small>
            <p>전문 상담사 {year}년</p>
            <h1>{name}</h1>
          </div>
        </Profile>
      </Top>
      <Bottom>
        <div>{name} 상담사의 강점</div>
        <p>{pros}</p>

        <div>이런 사람에게 추천해요!</div>
        <p>{recommend}</p>

        <div>심리상담 효과</div>
        <p>{effect}</p>
      </Bottom>
    </>
  );
};

export default CounselorDetail;
