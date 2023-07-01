import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './pages/Main';
import Guide from './pages/Guide';
import Diary from './pages/Diary';
import Reserve from './pages/Reserve';
import Counsel from './pages/Counsel';
import Condition from './pages/Condition';
import ConditionCheck from './pages/ConditionCheck';
import Policy from './pages/Policy';
import Survey from './pages/Survey';
import Error from './pages/Error';
import postData from './api/postData';

function App() {
  const { pathname } = useLocation();
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    postData('/visits', null).then((res) =>
      setVisitCount(res?.data.visitCount)
    );
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header path={pathname} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/diary/*" element={<Diary />} />
        <Route path="/reserve/counsel" element={<Counsel />} />
        <Route path="/reserve/*" element={<Reserve />} />
        <Route path="/counsel/*" element={<Counsel />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/condition/*" element={<ConditionCheck />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/survey/*" element={<Survey />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer visitCount={visitCount} />
    </>
  );
}

export default App;
