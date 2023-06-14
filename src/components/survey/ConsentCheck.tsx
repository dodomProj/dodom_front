import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface CheckProps {
  checkedChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Box = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 2.5rem;
  gap: 0.4rem;

  > img {
    margin-top: 1px;
    width: 1.2rem;
    height: 1.2rem;
  }
  > p {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;
const Label = styled.label`
  cursor: pointer;

  > input {
    display: none;
    :checked + span:before {
      background-image: url('/assets/check_btn.svg');
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  > span {
    display: block;
    text-align: right;
    :before {
      content: '';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background-color: var(--primary);
      border-radius: 2px;
      vertical-align: middle;
      box-shadow: 0px 3px 5px rgba(46, 46, 66, 0.08);
    }
  }
`;

const ConsentCheck = ({ checkedChange }: CheckProps) => {
  return (
    <div>
      <Box>
        <img src="/assets/emoji_glowing_star.svg" alt="" />
        <p>
          위 후기는 "익명"으로 도돔의 상담사 후기란 혹은 도돔 소개 게시판에
          게시될 가능성이 있습니다. 여러분의 후기는 다른 이들에게 또 다른 용기가
          됩니다. <br />
          동의하시겠습니까?
        </p>
      </Box>
      <Label>
        <input type="checkbox" onChange={checkedChange} />
        <span> 동의합니다.</span>
      </Label>
    </div>
  );
};

export default ConsentCheck;
