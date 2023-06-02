import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Condition from './pages/Condition';
import ConditionCheck from './pages/ConditionCheck';
import Policy from './pages/Policy';
import Survey from './pages/Survey';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header theme={pathname === '/' ? 'dark' : 'light'} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/condition/*" element={<ConditionCheck />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
