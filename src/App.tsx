import { useMediaQuery } from "react-responsive";
import Navigation from "./Components/Navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #c8c8c8;
`;

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 999px)" });
  return (
    <Wrapper>
      <Navigation />
      {isDesktop && <p>more than 1000px</p>}
      {isMobile && <p>less than 1000px</p>}
    </Wrapper>
  );
}
export default App;
