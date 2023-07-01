import { useState } from 'react';
import styled from 'styled-components';
import { PageBase, basePadding } from '../styles/basePadding';
import { aboutDodom, aboutCounsel, faq } from '../data/guideData';
import TextBox from '../components/common/TextBox';
import ToDiary from '../components/common/ToDiary';
type container = {
  background: string;
};

type aboutCounselProps = {
  theme: string;
};

const Container = styled.div<container>`
  background-color: ${(props) => `var(${props.background})`};
  transition: 0.5s;
`;
const AboutCounsel = styled.div<aboutCounselProps>`
  ${basePadding};
  background-color: ${(props) =>
    props.theme === 'dark' ? 'var(--black)' : 'var(--secondary)'};
  color: ${(props) =>
    props.theme === 'dark' ? 'var(--white)' : 'var(--black)'};

  height: max-content;
  @media only screen and (min-width: 940px) {
    height: 900px;
  }
  padding-top: 5rem;
  transition: 0.5s;
`;
const Title = styled.h1`
  color: inherit;
  display: block;
  margin-bottom: 1rem;
`;
const PointTitle = styled.span`
  font-size: inherit;
  color: var(--primary);
`;
const Contents = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .img-container {
    height: 230px;
    display: flex;
    align-items: flex-end;
  }
  img {
    width: 250px;
    margin-bottom: 40px;
  }
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    min-width: 270px;
    margin-bottom: 5rem;
  }
`;
const Hovered = styled.div`
  text-align: start;
  padding: 0 0.8rem;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;
const FAQ = styled.div`
  ${basePadding}
  padding-top: 5rem;
  padding-bottom: 5rem;
  height: max-content;
  @media only screen and (min-width: 1080px) {
    height: 900px;
  }
`;
const Toggles = styled.div`
  height: 80%;
  margin-top: 5rem;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 40px;
`;
const Question = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;
const Answer = styled.div`
  font-size: 1.2rem;
  margin-left: 1.8rem;
  line-height: 1.5rem;
`;

const Guide = () => {
  const [hoverContent, setHoverContent] = useState<number>(-1);
  const [clickContents, setClickContents] = useState([
    false,
    false,
    false,
    false,
  ]);
  const handleToggle = (index: number) => {
    const contents = [...clickContents];
    contents[index] = !contents[index];
    setClickContents(contents);
  };
  return (
    <PageBase>
      <TextBox {...aboutDodom} />
      <Container background={hoverContent >= 0 ? '--black' : '--secondary'}>
        <AboutCounsel
          onMouseOut={() => setHoverContent(-1)}
          theme={hoverContent >= 0 ? 'dark' : 'light'}
        >
          <Title>
            <PointTitle>DODOM,</PointTitle> 상담은 어떻게 이루어지나요?
          </Title>
          <Contents>
            {aboutCounsel.map((item, index) => (
              <div key={index} onMouseOver={() => setHoverContent(index)}>
                <div className="img-container">
                  <img src={process.env.PUBLIC_URL + item.img} alt="" />
                </div>
                {hoverContent === index ? (
                  <Hovered>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </Hovered>
                ) : (
                  <h2>{item.title}</h2>
                )}
              </div>
            ))}
          </Contents>
        </AboutCounsel>
      </Container>
      <Container background="--black">
        <FAQ>
          <Title>
            <PointTitle>DODOM이 궁금해요</PointTitle>
          </Title>
          <Toggles>
            {faq.map((item, index) => (
              <div key={index}>
                <Question onClick={() => handleToggle(index)}>
                  ▶ Q{index + 1}. {item.question}
                </Question>
                {clickContents[index] && (
                  <Answer>
                    A{index + 1}. {item.answer}
                  </Answer>
                )}
              </div>
            ))}
          </Toggles>
        </FAQ>
      </Container>
      <ToDiary />
    </PageBase>
  );
};

export default Guide;
