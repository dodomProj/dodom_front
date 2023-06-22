import styled from 'styled-components';
import DateTimePicker from './DateTimePicker';
import { useRecoilState } from 'recoil';
import { formTimeState } from '../recoil/reserve';

const Box = styled.div``;

const DateTimeBlock = () => {
  const [formTime, setFormTime] = useRecoilState(formTimeState);
  return (
    <Box>
      {formTime.map((time) => (
        <DateTimePicker
          dateId={time.id}
          maxId={formTime[formTime.length - 1].id}
          key={time.id}
        />
      ))}
    </Box>
  );
};

export default DateTimeBlock;
