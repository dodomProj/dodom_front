import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Diary from './pages/Diary';

import Header from './components/Header';
import Footer from './components/Footer';
import Counsel from './pages/Counsel';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header path={pathname} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/diary/*" element={<Diary />} />
        <Route path="/counsel/*" element={<Counsel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
