import styled from 'styled-components';
import { basePadding } from '../styles/basePadding';

const FooterContainer = styled.footer`
  ${basePadding}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  gap: 1rem;
`;
const Slogan = styled.p`
  display: flex;
  gap: 0.5rem;

  > span {
    font-size: 1.5rem;
    text-align: center;
    word-break: keep-all;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Slogan>
        <span>같이 발돋움하며 앞으로 나아가요,</span>
        <span>도돔도돔 DODOM!</span>
      </Slogan>
      <p>누적 DODOM! 이용자수 1,234명</p>
    </FooterContainer>
  );
}

export default Footer;
