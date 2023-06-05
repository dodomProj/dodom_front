import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import navEl from '../data/navEl';
import { basePadding } from '../styles/basePadding';

interface HeaderTheme {
  theme: string;
}

const HeaderContainer = styled.header<HeaderTheme>`
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
  background-color: var(${(props) => props.theme});
`;
const LogoBox = styled.div`
  flex: 1;
`;
const Logo = styled(Link)<HeaderTheme>`
  font-family: 'Pretendard-Bold';
  font-size: 2rem;
  color: var(${(props) => props.theme});
`;
const NavBox = styled.nav`
  flex: 0.8;
  display: flex;
  justify-content: space-between;
`;
const PageLink = styled(Link)<HeaderTheme>`
  font-size: 1.1rem;
  color: var(${(props) => props.theme});
  word-break: keep-all;
`;

const Header: FC<HeaderTheme> = ({ theme }) => {
  return (
    <HeaderContainer theme={theme === 'dark' ? '--black' : '--white'}>
      <LogoBox>
        <Logo to="/" theme={theme === 'dark' ? '--primary' : '--black'}>
          DODOM
        </Logo>
      </LogoBox>
      <NavBox>
        {navEl.map((el) => (
          <PageLink
            key={el.uri}
            to={el.uri}
            theme={theme === 'dark' ? '--white' : '--black'}
          >
            {el.pageName}
          </PageLink>
        ))}
      </NavBox>
    </HeaderContainer>
  );
};

export default Header;
