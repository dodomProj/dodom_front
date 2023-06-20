import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Diary from './pages/Diary';
import Reserve from './pages/Reserve';
import Counsel from './pages/Counsel';
import Condition from './pages/Condition';
import ConditionCheck from './pages/ConditionCheck';
import Policy from './pages/Policy';
import Survey from './pages/Survey';
import Error from './pages/Error';

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
        <Route path="/condition" element={<Condition />} />
        <Route path="/condition/*" element={<ConditionCheck />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/survey/*" element={<Survey />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
