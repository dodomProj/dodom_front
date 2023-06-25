import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

const More = styled(Link)`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

interface MoreInfoProps {
  toUri: string;
  onClick?: () => void;
  infoText: string;
}

const MoreInfoArrow = ({ toUri, onClick, infoText }: MoreInfoProps) => {
  return (
    <More to={toUri} onClick={onClick}>
      {infoText}
      <BsArrowRight />
    </More>
  );
};

export default MoreInfoArrow;
