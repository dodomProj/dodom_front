import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Diary from './pages/Diary';
import Reserve from './pages/Reserve';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header path={pathname} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/diary/*" element={<Diary />} />
        <Route path="/reserve/*" element={<Reserve />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
