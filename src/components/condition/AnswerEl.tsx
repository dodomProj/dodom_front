import styled from 'styled-components';

type AnswerProps = {
  img: string;
  text: string;
  setAnswer: () => void;
  selected: boolean;
};

type BoxProps = {
  bgcolor: string;
};

const Box = styled.li<BoxProps>`
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(${(props) => props.bgcolor});
  padding: 3% 2%;
  border-radius: 10px;
  cursor: pointer;

  > p {
    font-size: 1.5rem;
    word-break: keep-all;
    text-align: center;
  }
`;
const AnswerEmoticon = styled.img`
  width: 100%;
  max-width: 10rem;
  object-fit: contain;
  margin: 2rem;
  pointer-events: none;
`;

const AnswerEl = ({ img, text, setAnswer, selected }: AnswerProps) => {
  return (
    <Box
      onClick={selected ? undefined : setAnswer}
      bgcolor={selected ? '--secondary' : 'inherit'}
    >
      <AnswerEmoticon src={img} />
      <p>{text}</p>
    </Box>
  );
};

export default AnswerEl;
