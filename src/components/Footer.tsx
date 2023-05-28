import styled from 'styled-components';
import { basePadding } from '../styles/basePadding';

const FooterContainer = styled.footer`
  ${basePadding}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
const Slogan = styled.p`
  font-size: 1.2rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <Slogan>같이 발돋움하며 앞으로 나아가요, 도돔도돔 DODOM!</Slogan>
      <p>실시간 DODOM! 이용자수 1,234명</p>
    </FooterContainer>
  );
}

export default Footer;
