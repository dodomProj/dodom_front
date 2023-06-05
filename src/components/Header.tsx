import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import navEl from '../data/navEl';
import { basePadding } from '../styles/basePadding';

const HeaderContainer = styled.header`
  ${basePadding}
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: var(--black);
`;
const LogoBox = styled.div`
  flex: 1;
`;
const Logo = styled(Link)`
  font-family: 'Pretendard-Bold';
  font-size: 2rem;
  color: var(--primary);

  :hover {
    letter-spacing: 2px;
  }
`;
const NavBox = styled.nav`
  flex: 0.8;
  display: flex;
  justify-content: space-between;
`;
const PageLink = styled(Link)`
  font-size: 1.1rem;
  color: var(--white);
  word-break: keep-all;

  :hover {
    font-weight: bold;
    color: var(--white);
  }
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <LogoBox>
        <Logo to="/">DODOM</Logo>
      </LogoBox>
      <NavBox>
        {navEl.map((el) => (
          <PageLink key={el.uri} to={el.uri}>
            {el.pageName}
          </PageLink>
        ))}
      </NavBox>
    </HeaderContainer>
  );
};

export default Header;
