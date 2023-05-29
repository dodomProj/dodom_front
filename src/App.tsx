import React from 'react';
import { RecoilRoot } from 'recoil';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ConditionCheck from './pages/ConditionCheck';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header theme="dark" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/conditioncheck" element={<ConditionCheck />} />
      </Routes>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
