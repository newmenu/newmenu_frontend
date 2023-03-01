import styled from "styled-components";

const Wrapper = styled.div`
  background-color: aquamarine;
  width: 90vw;
  height: 100vh;
  margin: auto;
`;

function Preview() {
  return (
    <Wrapper>
      <h1>preview Page</h1>
    </Wrapper>
  );
}

export default Preview;
