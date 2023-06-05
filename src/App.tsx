import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import { useRecoilState } from 'recoil';
import { headerThemeState } from './recoil';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header path={pathname} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
