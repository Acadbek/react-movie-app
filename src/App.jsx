import Main from "./Layout/Main";
import Routess from "./Router/Routess";
import { GlobalStyle } from "./styles/GlobalStyle.styled";

function App() {
  return (
    <>
      <Main>
        <GlobalStyle>
          <Routess />
        </GlobalStyle>
      </Main>
    </>
  );
}

export default App;
