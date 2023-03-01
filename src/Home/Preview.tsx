import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  //background-color: aquamarine;
  width: 90vw;
  height: 100vh;
  margin: auto;
  text-align: center;
  justify-content: center;
  position: relative;
  min-height: 500px;
  min-width: 500px;
`;

const Layer = styled.div`
  width: 90vw;
  height: 90vh;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.1;
  background-position: center;
  background-image: url("/img/previewsample.png");
`;

const MainImg = styled.div<{ isMobile: boolean }>`
  position: absolute;
  bottom: 20vh;
  left: ${(props) => (props.isMobile ? "20vw" : "15vw")};
  height: 60vh;
  width: min(60vh, 60vw);
  min-height: 300px;
  min-width: 300px;
  //background-color: #e3abab;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/previewsample.png");
`;

const ExpBox = styled.div`
  //background-color: blue;
  height: 30vh;
  //width: 30vw;
  position: absolute;
  bottom: 0;
  left: min(60vh, 60vw);
  min-height: 100px;
  min-width: 300px;
  white-space: nowrap;
`;

const Name = styled.div`
  //background-color: yellow;
  height: 21vh;
  font-size: 10vh;
  text-align: left;
  padding-top: 11vh;
  font-family: "SEBANG_Gothic_Bold", sans-serif;
`;

const Exp = styled.div`
  //background-color: purple;
  height: 9vh;
  font-size: 3vh;
  text-align: left;
  padding-top: 1vh;
  font-family: "Pretendard-Regular", sans-serif;
`;

function Preview() {
  const isMobile = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <Wrapper>
      <Layer />
      <MainImg isMobile={isMobile}>
        {isMobile && (
          <ExpBox>
            <Name>딸기 샌드위치</Name>
            <Exp>GS편의점 | 2400원</Exp>
          </ExpBox>
        )}
      </MainImg>
    </Wrapper>
  );
}

export default Preview;
