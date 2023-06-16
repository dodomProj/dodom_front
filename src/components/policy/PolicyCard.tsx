import styled from 'styled-components';

interface CardProps {
  img: string;
  policyInfo: any;
  url: string;
}

const Box = styled.article`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  > img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    object-fit: cover;
  }
`;
const Text = styled.div`
  padding: 1.25rem 1.25rem 0;

  > h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;
const MoreInfo = styled.a`
  display: block;
  font-size: 0.75rem;
  text-align: end;
  cursor: pointer;
  padding: 0 1.25rem 1.25rem;
`;
const PolicyCard = ({
  img = '/assets/emoji_grinning_face.png',
  policyInfo,
  url,
}: CardProps) => {
  const title = policyInfo.이름.title.reduce(
    (a: string, c: any) => a + c.plain_text,
    ''
  );
  const content = policyInfo.설명.rich_text[0].plain_text;
  return (
    <Box>
      <div>
        <ImgWrapper>
          <img src={img} alt="" />
        </ImgWrapper>
        <Text>
          <h3>{title}</h3>
          <p>{content.length > 75 ? content.slice(0, 75) + '...' : content}</p>
        </Text>
      </div>
      <MoreInfo href={url} target="_blank">
        자세히 알아보기
      </MoreInfo>
    </Box>
  );
};

export default PolicyCard;
