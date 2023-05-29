import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
// import Condition from './pages/Condition';
// import ConditionCheck from './pages/ConditionCheck';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header theme={pathname === '/' ? 'dark' : 'light'} />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/condition" element={<Condition />} />
        <Route path="/condition/*" element={<ConditionCheck />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
