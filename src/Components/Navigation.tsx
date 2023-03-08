import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  background-color: #ffa1bd;
`;

const Nav = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? "95vw" : "100vw")};
  margin: auto;
  min-width: 200px;
  background-color: "#FFA1BD";
  height: 8vh;
  min-height: 40px;
  align-items: ${(props) => !props.isMobile && "center"};
  display: ${(props) => !props.isMobile && "flex"};
`;

const Logo = styled.div`
  //background-color: #5a87af;
  float: left;
  height: 5.6vh;
  min-height: 35px;
  margin-top: max(1.2vh, 7.5px);
  width: 32vh;
  min-width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/logo.png");
`;

const Bar = styled.div`
  height: 4.8vh;
  width: 4.8vh;
  min-height: 30px;
  min-width: 30px;
  margin-top: max(1.6vh, 10px);
  //background-color: aqua;
  //margin-right: 10px;
  float: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/bar.png");
`;

const LogoItem = styled.div`
  height: 7vh;
  margin-top: 0.5vh;
  width: 14vh;
  min-height: 40px;
  min-width: 80px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/logo_mini.png");
  //background-color: #ae7730;
  margin: auto;
`;

function Navigation() {
  const isMobile = useMediaQuery({ query: "(min-width: 600px)" });
  return (
    <Wrapper>
      <Nav isMobile={isMobile}>
        {isMobile ? <Logo /> : <LogoItem />}
        {isMobile && <Bar />}
      </Nav>
    </Wrapper>
  );
}

export default Navigation;
