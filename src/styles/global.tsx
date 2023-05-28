import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard-medium'; 
    font-size: 16px;
  }
  h1 {
    font-family: 'Pretendard-Bold';
    font-size: 48px;
  }
  h2 {
    font-family: 'Pretendard-Bold';
    font-size: 36px;
  }
  a {
    text-decoration: none;
    color: var(--black);
    :hover {
      color: var(--primary);      
    }
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

  :root {
    --primary: rgba(255, 194, 36, 1);
    --secondary: rgba(255, 248, 233, 1);
    --third: rgba(255, 249, 237, 1);
    --black: rgba(17, 14, 13, 1);
    --sub3: rgba(104, 96, 96, 1);
    --sub2: rgba(127, 125, 129, 1);
    --sub: rgba(196, 190, 189, 1);
    --point: rgba(235, 78, 61, 1);
  }
`;

export default GlobalStyle;
