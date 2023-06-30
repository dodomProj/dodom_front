import styled from 'styled-components';
import DateTimePicker from './DateTimePicker';
import { useRecoilState } from 'recoil';
import { formDateTimeState } from '../recoil/reserve';

const Box = styled.div``;

const DateTimeBlock = () => {
  const [formData, setFormData] = useRecoilState(formDateTimeState);
  return (
    <Box>
      {formData.timeList.map((time) => (
        <DateTimePicker dateId={time.id} key={time.id} />
      ))}
    </Box>
  );
};

export default DateTimeBlock;
