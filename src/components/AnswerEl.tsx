type AnswerProps = {
  img: string;
  text: string;
  score: number;
};

const AnswerEl = ({ img, text, score }: AnswerProps) => {
  return (
    <li>
      <img src={img} />
      <p>{text}</p>
    </li>
  );
};

export default AnswerEl;
