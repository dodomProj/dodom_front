import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Diary from './pages/Diary';

import Header from './components/Header';
import Footer from './components/Footer';
import Counsel from './pages/Counsel';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header theme={'dark'} />
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
