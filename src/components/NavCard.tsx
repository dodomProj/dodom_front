import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from '../styles/baseCard';

type NavCardProps = {
  title: string;
  text: Array<string>;
  img: string;
  type: number;
  link: string;
  color: string;
};

const Container = styled(Card)`
  position: relative;
  background-color: var(${(props) => props.theme});
  width: 565px;
  height: 370px;
`;

const Item = styled(Link)`
  :hover {
    color: var(--black);
  }
  img {
    width: 15rem;
  }
  > :first-child {
    position: absolute;
    right: 3rem;
    top: 3rem;
  }
  > :nth-child(2) {
    position: absolute;
    left: 3rem;
    bottom: 3.5rem;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  h2 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 18px;
  }
`;

const NavCard = ({ title, text, img, type, link, color }: NavCardProps) => {
  return (
    <Container theme={color}>
      {type ? (
        <Item to={link}>
          <Text>
            <h2>{title}</h2>
            {text.map((line) => (
              <p>{line}</p>
            ))}
          </Text>
          <img src={process.env.PUBLIC_URL + `/assets/${img}.png`} />
        </Item>
      ) : (
        <Item to={link}>
          <img src={process.env.PUBLIC_URL + `/assets/${img}.png`} />
          <Text>
            <h2>{title}</h2>
            {text.map((line) => (
              <p>{line}</p>
            ))}
          </Text>
        </Item>
      )}
    </Container>
  );
};

export default NavCard;
