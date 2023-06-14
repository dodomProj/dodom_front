import { Progress } from '@nextui-org/react';
import styled from 'styled-components';

interface ProgressProps {
  value: number;
  size: any;
  bgcolor: string;
  barcolor: string;
}

interface StyleProps {
  bgcolor: string;
  barcolor: string;
}

const ProgressStyle = styled(Progress)<StyleProps>`
  background-color: ${(props) => props.bgcolor};
  > div {
    background-color: ${(props) => props.barcolor};
  }
`;

const ProgressBar = ({ value, size, bgcolor, barcolor }: ProgressProps) => {
  return (
    <ProgressStyle
      bgcolor={bgcolor}
      barcolor={barcolor}
      value={value}
      size={size}
      color="warning"
      status="warning"
    />
  );
};
export default ProgressBar;
