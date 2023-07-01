import styled from 'styled-components';

interface CategoryProps {
  title: string;
  text: string;
  textsize?: string;
  textalign?: string;
  marginbottom?: string;
}
interface TextStyle {
  textsize?: string;
  textalign?: string;
  marginbottom?: string;
}

const Text = styled.div<TextStyle>`
  text-align: ${(props) => props.textalign || ''};
  margin-bottom: ${(props) => props.marginbottom || '0'};

  > h2 {
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: ${(props) => props.textsize || '1.2rem'};
    line-height: 2rem;
    white-space: pre-line;
  }
`;

const CategoryBox = ({
  title,
  text,
  textsize,
  textalign,
  marginbottom,
}: CategoryProps) => {
  return (
    <Text textsize={textsize} textalign={textalign} marginbottom={marginbottom}>
      <h2>{title}</h2>
      <p>{text}</p>
    </Text>
  );
};

export default CategoryBox;
