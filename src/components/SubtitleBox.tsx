import styled from 'styled-components';
import { basePadding } from '../styles/basePadding';

type SubtitleProps = {
  title?: string;
  text?: string[];
  img?: string;
  time?: number;
};

const Box = styled.div`
  ${basePadding}
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  height: 40vh;
  background-color: var(--primary);

  > img {
    flex: 0.5;
  }
`;
const Text = styled.div`
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
    <Box>
      <img src={img} />
      <Text>
        <div>
          <h1>{title}</h1>
          {time && <span>예상 시간 {time}분</span>}
          {text?.map((line) => (
            <p>{line}</p>
          ))}
        </div>
      </Text>
    </Box>
  );
};

export default SubtitleBox;
