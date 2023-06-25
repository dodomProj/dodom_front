import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import 'react-datepicker/dist/react-datepicker-min.module.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { formTimeState } from '../recoil/reserve';
import { questionStyle } from './QuestionInput';

const DateBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const PickBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  font-size: 0.9em;
  border: 1px solid var(--sub);
  border-radius: 8px;
  padding: 1rem;
  ::placeholder {
    color: var(--sub3);
  }
  margin-bottom: 4px;
`;

const Label = styled.label`
  display: block;
  ${questionStyle}
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 6px;
  width: fit-content;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  margin-left: 0.5rem !important;
  visibility: ${(props) => (props.disabled ? 'hidden' : 'visible')};
  img {
    width: 2.4rem;
  }
`;

interface Props {
  dateId: number;
  maxId: number;
}

const DateTimePicker = ({ dateId, maxId }: Props) => {
  const today = new Date();
  const [date, setDate] = useState<Date>(today);
  const [time, setTime] = useState<Date>(today);

  const [formTime, setFormTime] = useRecoilState(formTimeState);

  useEffect(() => {
    const dateString = date.toLocaleDateString();
    const timeState = [...formTime];
    timeState[dateId] = { ...timeState[dateId], date: dateString };
    setFormTime(timeState);
  }, [date]);

  useEffect(() => {
    const timeString = time.toTimeString().slice(0, 9);
    const timeState = [...formTime];
    timeState[dateId] = { ...timeState[dateId], time: timeString };
    setFormTime(timeState);
  }, [time]);

  const datePickAdd = () => {
    const timeState = [...formTime];
    timeState.push({ date: '', time: '', id: maxId + 1 });
    setFormTime(timeState);
  };

  const datePickRemove = () => {
    console.log(dateId);
    const timeState = formTime.filter((time) => time.id !== dateId);
    setFormTime(timeState);
  };
  return (
    <DateBox>
      <PickBox>
        {dateId === 0 && <Label htmlFor="form-date">상담 희망 날짜</Label>}
        <StyledDatePicker
          id="form-date"
          dateFormat="yyyy년 MM월 dd일"
          selected={date}
          minDate={today}
          onChange={(date: Date) => setDate(date)}
          // placeholderText="****년 **월 **일"
        />
      </PickBox>
      <PickBox>
        {dateId === 0 && <Label htmlFor="form-time">상담 희망 시간</Label>}
        <StyledDatePicker
          id="form-time"
          selected={time}
          onChange={(time: Date) => setTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="HH시 mm분"
        />
      </PickBox>
      <ButtonBox>
        <Button type="button" onClick={() => datePickAdd()}>
          <img src={process.env.PUBLIC_URL + '/assets/addbutton.svg'} />
        </Button>
        <Button
          disabled={dateId === 0 ? true : false}
          type="button"
          onClick={() => datePickRemove()}
        >
          <img src={process.env.PUBLIC_URL + '/assets/removebutton.svg'} />
        </Button>
      </ButtonBox>
    </DateBox>
  );
};

export default DateTimePicker;
