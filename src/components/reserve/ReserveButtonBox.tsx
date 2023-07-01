import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
} from 'recoil';
import Button from '../common/Button';
import Loading from '../common/Loading';
import postData from '../../api/postData';
import { selectedCounselorsState } from '../../recoil/counsel';
import {
  FormData,
  formDataState,
  recommendedsState,
} from '../../recoil/reserve';

const ButtonBox = styled.div`
  position: relative;
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
const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 14, 13, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ReserveButtonBox = () => {
  const selectedCounselors = useRecoilValue(selectedCounselorsState);
  const [formData, setFormData] = useRecoilState(formDataState);
  const resetFormData = useResetRecoilState(formDataState);
  const { state, contents: recommendeds } =
    useRecoilValueLoadable(recommendedsState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const postReserve = (form: FormData) => {
    setIsLoading(true);
    postData('/appointments', form).then((res) =>
      res.status === 201
        ? (resetFormData(), navigate('/reserve/reserved'))
        : (alert('예약이 실패했습니다.\n잠시 후 다시 요청해주세요'),
          navigate('/'))
    );
  };

  const SubmitReserveForm = () => {
    if (formData.counselorId === -1) {
      const counselors = [...new Set(selectedCounselors)];
      const numOfCounselors = counselors.length;
      if (numOfCounselors === 1)
        postReserve({
          ...formData,
          counselorId: counselors[0],
        });
      else alert('상담사 한 명을 선택해주세요');
    } else if (Object.values(formData).every((value) => value))
      postReserve(formData);
  };

  return (
    <ButtonBox>
      {isLoading && (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
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
