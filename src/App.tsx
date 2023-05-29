import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import { useRecoilState } from 'recoil';
import { headerThemeState } from './recoil';

function App() {
  const [headerTheme, setHeaderTheme] = useRecoilState(headerThemeState);
  return (
    <>
      <GlobalStyle />
      <Header theme={headerTheme} />
      <Routes>
        <Route path="/" element={<Main themeSetter={setHeaderTheme} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
