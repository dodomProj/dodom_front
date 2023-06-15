import styled from 'styled-components';
import { basePadding } from '../styles/basePadding';

type TextBoxProps = {
  title: String;
  subtitle?: String;
  text: Array<String>;
  theme: String;
};

const Box = styled.div`
  ${basePadding}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-top: 4rem;
  padding-bottom: 4rem;

  background-color: var(
    ${(props) => (props.theme === 'dark' ? '--black' : '--primary')}
  );
  color: var(${(props) => (props.theme === 'dark' ? '--white' : '--black')});

  p {
    font-size: 1.5rem;
  }
`;

const Title = styled.div`
  h1 {
    color: var(
      ${(props) => (props.theme === 'dark' ? '--primary' : '--black')}
    );
    margin-bottom: 10px;
  }
  margin-bottom: 4%;
`;

const Text = styled.div`
  p {
    text-indent: 0.5rem;
    line-height: 2.2rem;
  }
`;

const TextBox = ({ title, subtitle, text, theme }: TextBoxProps) => {
  return (
    <Box theme={theme}>
      <Title theme={theme}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Title>
      <Text>
        {text.map((line) => (
          <p>{line}</p>
        ))}
      </Text>
    </Box>
  );
};

export default TextBox;
