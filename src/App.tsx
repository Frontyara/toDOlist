import "./App.scss";
import { DefaultButton } from "./shared/buttons/defaultButton";
import { DefaultInput } from "./shared/inputs/defaultInput";

function App() {
  return (
    <>
    <DefaultInput isError={false} title="titleexp" placeHolder="this place"/>
    <DefaultButton isDisabled={false} text="click" onClick={() => {}}/>
    <DefaultButton isDisabled={true} text="click2" onClick={() => {}}/>
    <DefaultInput isError={true} title="titleexp" placeHolder="this place"/>
    </>
  );
}

export default App;
