import { useMediaQuery } from "react-responsive";
import Navigation from "./Components/Navigation";
import styled from "styled-components";
import Home from "./Home";

const Wrapper = styled.div`
  background-color: white;
`;

function App() {
  return (
    <Wrapper>
      <Navigation />
      <Home />
    </Wrapper>
  );
}
export default App;
