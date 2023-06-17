import styled from 'styled-components';
import { SubtitleContainer } from './ToDiary';

type SubtitleProps = {
  title?: string;
  text?: string[];
  img?: string;
  time?: number;
  theme?: string;
};
type isConditionProps = {
  inCondition?: number;
};

const Container = styled(SubtitleContainer)<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === 'light' ? 'var(--primary)' : 'var(--black)'};
  color: ${(props) =>
    props.theme === 'light' ? 'var(--black)' : 'var(--white)'};
`;

export const SubtitleText = styled.div`
  height: inherit;
  position: relative;

  > div {
    max-height: 50%;
    position: absolute;
    top: 50%;
  }
`;
const Title = styled.div<isConditionProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: ${(props) => (props.inCondition ? '0.5rem' : '1rem')};

  > h1 {
    white-space: pre-line;
  }
`;
const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: normal;

  > span {
    font-size: 1.5rem;
  }
`;
const Text = styled.div<isConditionProps>`
  > p {
    font-size: ${(props) => (props.inCondition ? '1.2rem' : '1.5rem')};
    text-indent: ${(props) => (props.inCondition ? '0.5rem' : '0')};
    margin-bottom: ${(props) => (props.inCondition ? '0.3rem' : '0')};
    line-height: ${(props) => (props.inCondition ? '1.5rem' : '1.8rem')};
  }
`;

const SubtitleBox = ({
  title,
  text,
  img,
  time,
  theme = 'light',
}: SubtitleProps): null | JSX.Element => {
  if (title === undefined) return null;
  return (
    <Container theme={theme}>
      <div>
        {theme === 'light' && <img src={img} alt="" />}
        <SubtitleText>
          <div>
            <Title inCondition={time}>
              <h1>{title}</h1>
              {time && (
                <Time>
                  <img src="/assets/time.svg" alt="" />
                  <span>예상 시간 {time}분</span>
                </Time>
              )}
            </Title>
            <Text inCondition={time}>
              {text?.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </Text>
          </div>
        </SubtitleText>
        {theme === 'dark' && <img src={img} alt="" />}
      </div>
    </Container>
  );
};

export default SubtitleBox;
