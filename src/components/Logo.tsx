import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const TitleStyle = css`
  font-family: 'Pretendard-Bold';
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: var(--primary);
`;
const LogoText = styled.span`
  ${TitleStyle}
`;
const LogoLink = styled(Link)`
  ${TitleStyle}

  :hover {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    left: -0.2rem;
    letter-spacing: 0.2rem;
  }
`;

const Logo = ({ isText }: { isText?: boolean }) => {
  if (isText) return <LogoText>DODOM</LogoText>;
  else return <LogoLink to="/">DODOM</LogoLink>;
};

export default Logo;
