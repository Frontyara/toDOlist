import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navigation } from "./widgets/navBar";
import { navLinks } from "./widgets/navBar/navLinks-data";
import { EmptyPage } from "./pages/emptyPage";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Navigation itemsLinks={navLinks} />
        <Routes>
          <Route path="/" element={<div>index page</div>}>
          </Route>
          <Route path="*" element={<EmptyPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
