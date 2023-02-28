import styled from "styled-components";

const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
  height: 300px;
  min-width: 500px;
  background-color: #ffffff;
  display: table;
  height: 8vh;
  min-height: 50px;
`;

const Nav = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const Logo = styled.div`
  //background-color: #5a87af;
  float: left;
  height: 70%;
  width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/t_logo.png");
`;

const Bar = styled.div`
  height: 70%;
  width: 50px;
  //background-color: aqua;
  float: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/img/bar.png");
`;

function Navigation() {
  return (
    <Wrapper>
      <Nav>
        <Logo />
        <Bar />
      </Nav>
    </Wrapper>
  );
}

export default Navigation;
