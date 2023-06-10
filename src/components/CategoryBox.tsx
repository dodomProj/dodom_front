import styled from 'styled-components';

interface CategoryProps {
  title: string;
  text: string;
  textsize: string;
}
interface TextStyle {
  textfs: string;
}

const Text = styled.div<TextStyle>`
  > h2 {
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: ${(props) => props.textfs};
    line-height: 2rem;
    white-space: pre-line;
  }
`;

const CategoryBox = ({ title, text, textsize }: CategoryProps) => {
  return (
    <Text textfs={textsize}>
      <h2>{title}</h2>
      <p>{text}</p>
    </Text>
  );
};

export default CategoryBox;
