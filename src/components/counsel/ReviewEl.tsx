import styled from 'styled-components';

const Box = styled.li`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1056px) {
    flex-direction: column;
  }
`;
const UserInfo = styled.div<{ direct: string }>`
  align-self: flex-end;
  display: flex;
  align-items: flex-end;

  > div {
    align-self: flex-start;
    word-break: keep-all;
    > h3 {
      font-size: 1.2rem;
      font-weight: normal;
      margin-bottom: 0.25rem;
    }
  }

  > img {
    width: 16rem;
    object-fit: contain;
    align-self: flex-end;
  }

  @media screen and (max-width: 1056px) {
    align-self: ${(props) => props.direct};
  }
`;
const Text = styled.div<{ direct: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
  padding: 2rem 4.5rem;
  margin-bottom: 4rem;
  background-color: var(--white);
  border: 8px solid var(--primary);
  border-radius: ${(props) =>
    props.direct === 'left' ? '96px 96px 0px 96px' : '96px 96px 96px 0px'};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  order: ${(props) => (props.direct === 'left' ? '0' : '+1')};

  > p {
    text-indent: 0.5rem;
    font-size: 1.2rem;
    line-height: 24px;
  }

  @media screen and (max-width: 1056px) {
    margin-bottom: 0;
    order: 0;
  }
`;

interface ReviewProps {
  img: string;
  name: string;
  appointmentAt: string;
  review: string;
  firstEl: string;
}

const ReviewEl = ({
  img,
  name,
  appointmentAt,
  review,
  firstEl,
}: ReviewProps) => {
  return (
    <Box>
      <Text direct={firstEl === 'review' ? 'left' : 'right'}>
        <p>{review}</p>
      </Text>
      <UserInfo direct={firstEl === 'review' ? 'flex-end' : 'flex-start'}>
        {firstEl !== 'info' && <img src={img} alt="" />}
        <div>
          <h3>{name.replace(/(?<!^)./g, '*')}</h3>
          <p>{appointmentAt.split('-').slice(0, 2).join('.')} 이용</p>
        </div>
        {firstEl === 'info' && <img src={img} alt="" />}
      </UserInfo>
    </Box>
  );
};

export default ReviewEl;
