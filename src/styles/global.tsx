import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard-Regular'; 
    font-size: 16px;
  }
  h1 {
    font-family: 'Pretendard-Bold';
    font-size: 32px;
  }
  h2 {
    font-family: 'Pretendard-Medium';
    font-size: 24px;
  }
  h3 {
    font-family: 'Pretendard-Medium';
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
`;

export default GlobalStyle;
