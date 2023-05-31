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
  height: 40vh;
  background-color: var(--primary);

  > img {
    flex: 0.5;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
export const SubtitleText = styled.div`
  flex: 1;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
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
      <img src={img} />
      <SubtitleText>
        <div>
          <h1>{title}</h1>
          {time && <span>예상 시간 {time}분</span>}
          {text?.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </SubtitleText>
    </SubtitleContainer>
  );
};

export default SubtitleBox;
