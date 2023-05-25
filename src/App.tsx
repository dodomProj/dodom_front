import React from 'react';
import { RecoilRoot } from 'recoil';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle/>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
      {/* <Footer/> */}
    </RecoilRoot>
  );
}

export default App;
