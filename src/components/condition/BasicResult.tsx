import styled from 'styled-components';
import CategoryBox from '../CategoryBox';
import ProgressBar from '../ProgressBar';
import useTestResult from '../../util/useTestResult';

export const ProgressBox = styled.div`
  position: relative;

  > img,
  span {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
  }
`;
interface BarColor {
  color: string;
  shadow: string;
}
export const ProgressWrapper = styled(ProgressBox)<BarColor>`
  width: 25%;
  min-width: 180px;

  > img:first-child {
    left: 1rem;
    width: 2rem;
    max-height: 100%;
    object-fit: contain;
    transform: translateY(-45%);
  }

  > span:last-child {
    right: 1rem;
    font-size: 2.25rem;
    font-weight: bold;
    color: ${(props) => props.color};
  }

  > div {
    border-radius: 40px;
    box-shadow: inset 0 0 0 4px ${(props) => props.shadow};
    height: 3.2rem;
  }
`;
const TextBox = styled.div`
  margin-top: 1.6rem;

  > p {
    text-indent: 0.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
  }
`;
export const barColor = [
  'var(--primary)',
  'rgba(255, 138, 0, 1)',
  'var(--point)',
];

const BasicResult = () => {
  const { score, common, type } = useTestResult();
  if (score === undefined || !common?.total || !type) return null;

  return (
    <>
      <CategoryBox
        title={type.title}
        text={type.subTitle}
        textsize="1.5rem"
        textalign="right"
        marginbottom="8rem"
      />
      <ProgressWrapper
        color={type.level === 2 ? 'var(--black)' : barColor[type.level]}
        shadow={barColor[type.level]}
      >
        <img src={type.emoji} alt={type.emoji} />
        <ProgressBar
          value={(score / common.total) * 100}
          size="lg"
          bgcolor="inherit"
          barcolor={barColor[type.level]}
        />
        <span>{score}</span>
      </ProgressWrapper>
      <TextBox>
        {common.text.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </TextBox>
    </>
  );
};

export default BasicResult;
