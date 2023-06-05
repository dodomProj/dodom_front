import styled from 'styled-components';

interface CategoryProps {
  title: string;
  text: string;
}

const Text = styled.div`
  > h2 {
    margin-bottom: 0.5rem;
  }
  > p {
    font-size: 1.2rem;
    line-height: 2rem;
    white-space: pre-line;
  }
`;

const CategoryBox = ({ title, text }: CategoryProps) => {
  return (
    <Text>
      <h2>{title}</h2>
      <p>{text}</p>
    </Text>
  );
};

export default CategoryBox;
