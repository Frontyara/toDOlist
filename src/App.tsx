import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { Navigation } from "./widgets/navBar";
import { navLinks } from "./widgets/navBar/navLinks-data";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Navigation itemsLinks={navLinks} />
      </BrowserRouter>
    </div>
  );
}

export default App;
