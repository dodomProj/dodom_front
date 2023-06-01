import styled from 'styled-components';
import { basePadding } from '../styles/basePadding';

type SubtitleProps = {
  title?: string;
  text?: string[];
  img?: string;
  time?: number;
};

export const SubtitleContainer = styled.div`
  ${basePadding}
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: var(--primary);

  > img {
    flex: 0.5;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    padding: 3rem;
  }
`;
export const SubtitleText = styled.div`
  flex: 1;
  position: relative;

  > div {
    position: absolute;
    top: 50%;

    > h1 {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.5rem;
    }
  }
`;
const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: normal;
  > span {
    font-size: 24px;
  }
`;

const SubtitleBox = ({
  img,
  title,
  text,
  time,
}: SubtitleProps): null | JSX.Element => {
  if (title === undefined) return null;
  return (
    <SubtitleContainer>
      <img src={img} alt="" />
      <SubtitleText>
        <div>
          <h1>
            {title}
            {time && (
              <Time>
                <img src="/assets/time.svg" alt="" />
                <span>예상 시간 {time}분</span>
              </Time>
            )}
          </h1>
          {text?.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </SubtitleText>
    </SubtitleContainer>
  );
};

export default SubtitleBox;
