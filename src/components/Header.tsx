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
  font-size: 1.7rem;
  color: var(${(props) => props.theme});
`;
const NavBox = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
const PageLink = styled(Link)<HeaderTheme>`
  font-size: 1.1rem;
  color: var(${(props) => props.theme});
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
            to="/"
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
