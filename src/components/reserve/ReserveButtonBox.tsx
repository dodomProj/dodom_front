import styled from 'styled-components';
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import { formDataState, recommendedsState } from '../../recoil/reserve';
import Button from '../Button';

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 100%;

  button {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const ReserveButtonBox = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  // const setFormData = useSetRecoilState(formDataState);
  const { state, contents: recommendeds } =
    useRecoilValueLoadable(recommendedsState);

  const SubmitReserveForm = () => {
    console.log(formData);
    // postData('/appointments', formData);
  };

  return (
    <ButtonBox>
      <Button
        white={true}
        text="랜덤 배정받기"
        onClick={
          state === 'hasValue'
            ? () => (
                setFormData((formData) => {
                  return {
                    ...formData,
                    counselorId: recommendeds[0].counselorId,
                  };
                }),
                SubmitReserveForm()
              )
            : undefined
        }
      />
      <Button text="상담 예약하기" onClick={SubmitReserveForm} />
    </ButtonBox>
  );
};

export default ReserveButtonBox;
