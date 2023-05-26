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
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: var(${(props) => props.theme});
`;
const LogoBox = styled.div`
  flex: 1;
`;
const Logo = styled(Link)`
  font-family: 'Pretendard-Bold';
  font-size: 1.7rem;
  color: var(${(props) => props.theme});
`;
const NavBox = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
const PageLink = styled(Link)`
  font-size: 1.1rem;
  color: var(${(props) => props.theme});
`;

function Header({ theme }) {
  return (
    <HeaderContainer
      theme={theme === 'dark' ? '--dodom_black' : '--dodom_white'}
    >
      <LogoBox>
        <Logo theme={theme === 'dark' ? '--dodom_yellow' : '--dodom_black'}>
          DODOM
        </Logo>
      </LogoBox>
      <NavBox>
        {navEl.map((el) => (
          <PageLink
            key={el.uri}
            theme={theme === 'dark' ? '--dodom_white' : '--dodom_black'}
          >
            {el.pageName}
          </PageLink>
        ))}
      </NavBox>
    </HeaderContainer>
  );
}

export default Header;
