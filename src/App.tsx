import "./App.scss";
import { DefaultInput } from "./shared/inputs/defaultInput";

function App() {
  return (
    <>
    <DefaultInput isError={false} title="titleexp" placeHolder="this place"/>
    <DefaultInput isError={true} title="titleexp" placeHolder="this place"/>
    </>
  );
}

export default App;
