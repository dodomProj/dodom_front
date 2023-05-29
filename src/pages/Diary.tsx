import { PageBase } from '../styles/basePadding';
import styled from 'styled-components';
import TextBox from '../components/TextBox';
import { aboutDiary } from '../data/textBoxData';

const DiaryBox = styled(PageBase)`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  height: 500px;
`;

const Diary = () => {
  return (
    <DiaryBox>
      <Top>
        <TextBox {...aboutDiary} />
      </Top>
    </DiaryBox>
  );
};

export default Diary;
