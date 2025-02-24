import "./App.scss";
import { DefaultButton } from "./shared/buttons/defaultButton";

function App() {
  return (
    <>
      <DefaultButton
        text="some text"
        onClick={() => alert("click")}
        isDisabled={false}
      />
    </>
  );
}

export default App;
