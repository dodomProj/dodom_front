import styled from 'styled-components';

type AnswerProps = {
  img: string;
  text: string;
  score: number;
};

const Box = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-size: 24px;
  }
`;
const AnswerEmoticon = styled.img`
  width: 100%;
  max-width: 100%;
  object-fit: contain;
  padding: 10%;
`;

const AnswerEl = ({ img, text, score }: AnswerProps) => {
  return (
    <Box>
      <AnswerEmoticon src={img} />
      <p>{text}</p>
    </Box>
  );
};

export default AnswerEl;
