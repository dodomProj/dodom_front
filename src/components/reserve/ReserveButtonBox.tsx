import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import Button from '../Button';
import postData from '../../api/postData';
import { selectedCounselorsState } from '../../recoil/counsel';
import { formDataState, recommendedsState } from '../../recoil/reserve';

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
  const selectedCounselors = useRecoilValue(selectedCounselorsState);
  const [formData, setFormData] = useRecoilState(formDataState);
  const { state, contents: recommendeds } =
    useRecoilValueLoadable(recommendedsState);

  const SubmitReserveForm = () => {
    if (formData.counselorId === -1) {
      const counselors = [...new Set(selectedCounselors)];
      const numOfCounselors = counselors.length;
      if (numOfCounselors === 1)
        return postData('/appointments', {
          ...formData,
          counselorId: counselors[0],
        });
      else alert('상담사 한 명을 선택해주세요');
    } else if (Object.values(formData).every((value) => value))
      postData('/appointments', formData);
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
                    counselorId: recommendeds.counselors[0].counselorId,
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
