import { useState } from 'react';
import styled from 'styled-components';

interface CardProps {
  img: string;
  title: string;
  text: string;
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
    border-radius: 10px;
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
  padding: 1rem 1.25rem 1.25rem;
`;
const PolicyCard = ({
  img = '/assets/policy_default.png',
  title,
  text,
  url,
}: CardProps) => {
  const [imgSrc, setImgSrc] = useState(img);

  return (
    <Box>
      <div>
        <ImgWrapper>
          <img
            src={imgSrc}
            alt=""
            onError={() => setImgSrc('/assets/policy_default.png')}
          />
        </ImgWrapper>
        <Text>
          <h3>{title}</h3>
          <p>{text.length > 75 ? text.slice(0, 75) + '...' : text}</p>
        </Text>
      </div>
      <MoreInfo
        href={`https://carnation-english-ab2.notion.site/${url.replace(
          '-',
          ''
        )}`}
        target="_blank"
      >
        자세히 알아보기
      </MoreInfo>
    </Box>
  );
};

export default PolicyCard;
