import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? "90vw" : "100vw")};
  margin: auto;
  min-width: 200px;
  background-color: ${(props) => (props.isMobile ? "whitesmoke" : "#fedada")};
  height: ${(props) => (props.isMobile ? "50px" : "40vh")};
  min-height: ${(props) => (props.isMobile ? "50px" : "120px")};
  align-items: ${(props) => !props.isMobile && "center"};
  display: ${(props) => !props.isMobile && "flex"};
`;

const Logo = styled.div`
  //background-color: #5a87af;
  float: left;
  height: 35px;
  margin-top: 7.5px;
  width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/t_logo.png");
`;

const Bar = styled.div`
  height: 30px;
  width: 30px;
  margin-top: 10px;
  //background-color: aqua;
  margin-right: 10px;
  float: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/bar.png");
`;

const LogoItem = styled.div`
  height: 25vh;
  width: 25vw;
  min-height: 120px;
  min-width: 120px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/sample.png");
  //background-color: #ae7730;
  margin: auto;
`;

function Navigation() {
  const isMobile = useMediaQuery({ query: "(min-width: 800px)" });
  return (
    <Wrapper isMobile={isMobile}>
      {isMobile ? <Logo /> : <LogoItem />}
      <Bar />
    </Wrapper>
  );
}

export default Navigation;
