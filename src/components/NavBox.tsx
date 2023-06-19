import styled from 'styled-components';
import { Link } from 'react-router-dom';
import navEl from '../data/navEl';

const Box = styled.nav`
  flex: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const PageLink = styled(Link)`
  font-size: 1.3rem;
  color: var(--white);
  word-break: keep-all;
  text-align: center;

  :hover {
    font-weight: bold;
    color: var(--white);
  }
`;

const NavBox = () => {
  return (
    <Box onClick={(e) => e.stopPropagation()}>
      {navEl.map((el) => (
        <PageLink key={el.uri} to={el.uri}>
          {el.pageName}
        </PageLink>
      ))}
    </Box>
  );
};

export default NavBox;
