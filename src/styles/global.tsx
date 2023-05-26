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
    color: var(--dodom_black);
    :hover {
      color: var(--dodom_yellow);      
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
    --dodom_black: rgba(17, 14, 13, 1);
    --dodom_yellow: rgba(255, 194, 36, 1);
    --dodom_green: rgba(0, 82, 73, 1);
    --dodom_beige: rgba(255, 238, 203, 1);
    --dodom_brown: rgba(173, 146, 97, 1);
    --dodom_white: rgba(255, 255, 255, 1);
  }
`;

export default GlobalStyle;
