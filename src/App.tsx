import React from 'react';
import { RecoilRoot } from 'recoil';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Diary from './pages/Diary';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header theme="dark" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
