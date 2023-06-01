import styled from 'styled-components';
import { SubtitleContainer } from './ToDiary';

type SubtitleProps = {
  title?: string;
  text?: string[];
  img?: string;
  time?: number;
};

type ContainerHeight = {
  height: string;
};

const Container = styled(SubtitleContainer)<ContainerHeight>`
  height: ${(props) => props.height};
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
    <Container height={time ? '40vh' : '50vh'}>
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
    </Container>
  );
};

export default SubtitleBox;
