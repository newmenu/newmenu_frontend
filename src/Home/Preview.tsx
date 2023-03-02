import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const MainImg = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? "70vh" : "50vh")};
  width: ${(props) => (props.isMobile ? "70vh" : "100vw")};
  min-height: ${(props) => (props.isMobile ? "400px" : "200px")};
  min-width: ${(props) => (props.isMobile ? "400px" : "200px")};
  //background-color: rgb(227, 171, 171);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/previewsample.png");
  position: absolute;
  top: ${(props) => (props.isMobile ? "10vh" : "5vh")};
`;

const Wrapper = styled.div<{ isMobile: boolean }>`
  //background-color: aquamarine;
  width: ${(props) => (props.isMobile ? "50vw" : "100vw")};
  height: ${(props) => (props.isMobile ? "100vh" : "60vh")};
  margin: auto;
  text-align: center;
  justify-content: center;
  position: relative;
  min-height: ${(props) => (props.isMobile ? "500px" : "200px")};
  min-width: ${(props) => (props.isMobile ? "500px" : "200px")};
`;

const ExpBox = styled.div`
  //background-color: blue;
  position: absolute;
  left: 25vw;
  min-height: 100px;
  min-width: 300px;
  white-space: nowrap;
  bottom: 20vh;
`;

const Name = styled.div`
  //background-color: yellow;
  font-size: 3.5em;
  text-align: left;
  font-family: "SEBANG_Gothic_Bold", sans-serif;
  text-shadow: 3px 3px 2px rgb(0, 0, 0, 0.2);
`;

const Exp = styled.div`
  //background-color: purple;
  font-size: 1em;
  text-align: left;
  padding-top: 5px;
  font-family: "Pretendard-Regular", sans-serif;
`;

function Preview() {
  const isMobile = useMediaQuery({ query: "(min-width: 800px)" });

  return (
    <Wrapper isMobile={isMobile}>
      <MainImg isMobile={isMobile} />
      {isMobile && (
        <ExpBox>
          <Name>딸기 샌드위치</Name>
          <Exp>GS편의점 | 2400원</Exp>
        </ExpBox>
      )}
    </Wrapper>
  );
}

export default Preview;
