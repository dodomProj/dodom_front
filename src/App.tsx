import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header theme={pathname === '/' ? 'dark' : 'light'} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
