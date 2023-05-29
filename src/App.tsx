import React from 'react';
import { RecoilRoot } from 'recoil';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header theme="dark" />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
