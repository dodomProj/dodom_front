import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavBox from './NavBox';
import { basePadding } from '../styles/basePadding';

interface HeaderProps {
  path: string;
}

const HeaderContainer = styled.header`
  background-color: var(--black);
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;

  > div {
    ${basePadding}
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const LogoBox = styled.div`
  flex: 1;
  position: relative;
`;
const TitleStyle = css`
  font-family: 'Pretendard-Bold';
  font-size: 2rem;
  color: var(--primary);
`;
const Logo = styled(Link)`
  ${TitleStyle}

  :hover {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    left: -4px;
    letter-spacing: 2px;
  }
`;
const Survey = styled.p`
  ${TitleStyle}
`;
const HamburgerIcon = styled(GiHamburgerMenu)`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    color: var(--white);
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;
const NavWrapper = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    position: fixed;
    top: 100px;
    right: 0;
    width: 100vw;
    height: calc(100vh - 100px);
    background-color: rgba(17, 14, 13, 0.4);

    > nav {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
      min-width: 40vw;
      height: calc(100vh - 100px);
      padding: 2rem 40px 0;
      background-color: var(--black);

      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 2.6rem;
    }
  }
`;

const Header: FC<HeaderProps> = ({ path }) => {
  const [isNavOpend, setIsNavOpend] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsNavOpend(false);
  }, [pathname]);
  return (
    <HeaderContainer>
      <div>
        <LogoBox>
          <Logo to="/">DODOM</Logo>
        </LogoBox>
        {path === '/survey' ? (
          <Survey>설문조사</Survey>
        ) : (
          <>
            <HamburgerIcon onClick={() => setIsNavOpend(!isNavOpend)} />
            <NavBox />
            {isNavOpend && (
              <NavWrapper onClick={() => setIsNavOpend(false)}>
                <NavBox />
              </NavWrapper>
            )}
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
