import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Diary from './pages/Diary';
import Reserve from './pages/Reserve';
import Counsel from './pages/Counsel';

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
        <Route path="/counsel/*" element={<Counsel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
