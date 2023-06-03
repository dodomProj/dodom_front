import styled from 'styled-components';
import { PageBase, basePadding } from '../styles/basePadding';

import TextBox from '../components/TextBox';
import { aboutDiary } from '../data/textBoxData';
import DiaryEditBox from '../components/DiaryEditBox';

const DiaryBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  height: 500px;
  div > div {
    margin-bottom: 3rem;
  }
`;
const Bottom = styled.div`
  ${basePadding};
  padding-top: 7.5rem;
`;

const Diary = () => {
  return (
    <DiaryBox>
      <Top>
        <TextBox {...aboutDiary} />
      </Top>
      <Bottom>
        <DiaryEditBox />
      </Bottom>
    </DiaryBox>
  );
};

export default Diary;
