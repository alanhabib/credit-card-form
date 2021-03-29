import Form from "./components/Form/Form";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(#89f3ff, #020024);
`;
function App() {
  return (
    <Container className="App">
      <Form />
    </Container>
  );
}

export default App;
