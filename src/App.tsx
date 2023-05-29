import React from 'react';
import { RecoilRoot } from 'recoil';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import { basePadding } from './styles/basePadding';
import ConditionCheck from './pages/ConditionCheck';

const Div = styled.div`
  /* ${basePadding} */
  padding-top: 100px;
`;

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header theme="dark" />
      <Div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/conditioncheck" element={<ConditionCheck />} />
        </Routes>
      </Div>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
