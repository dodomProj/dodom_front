import styled from 'styled-components';
import { ReactComponent as StarIcon } from '../../svg/star.svg';
import DetailInfo from './DetailInfo';

const Top = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2.5rem;
  border-width: 0 0 3px 0;
  border-style: solid;
  border-color: var(--black);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  max-width: 35rem;
  object-fit: contain;
  margin-top: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: auto;
    bottom: 0;
    width: 50%;
    max-height: 100%;
  }
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-between;
  margin-bottom: 2rem;

  div {
    text-align: end;
    p {
      color: var(--sub3);
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      word-break: keep-all;
    }
  }
`;
const Slogan = styled.p`
  max-width: 15rem;
  margin-bottom: 1rem;
  font-family: Pretendard-Bold;
  font-size: 2.25rem;
  color: var(--sub3);
  word-break: keep-all;
  text-align: end;

  @media screen and (max-width: 768px) {
    align-self: end;
    max-width: 70%;
  }
`;
const Star = styled.div`
  display: inline-flex;
  align-items: center;
  color: var(--sub3);
  font-size: 1.125rem;
  margin-bottom: 0.5rem;

  > svg {
    width: 1.125rem;
    height: 1.125rem;
    color: var(--primary);
  }
`;
const Name = styled.span`
  font-family: Pretendard-Bold;
  font-size: 3rem;
  word-break: keep-all;
`;

type Props = {
  name: string;
  career: number;
  score: number;
  introduce: string;
  img: string;
};
const CounselorDetail = ({ name, career, score, introduce, img }: Props) => {
  return (
    <div>
      <Top>
        <Image src={img} />
        <Profile>
          <Slogan>{introduce}</Slogan>
          <div>
            <Star>
              <StarIcon /> {score}점 (5.0)
            </Star>
            <p>전문 상담사 {career}년</p>
            <Name>{name}</Name>
          </div>
        </Profile>
      </Top>
      <div>
        <DetailInfo title={`${name} 상담사의 강점`} />
        <DetailInfo title="이런 사람에게 추천해요!" />
        <DetailInfo title="심리상담 효과" />
      </div>
    </div>
  );
};

export default CounselorDetail;
