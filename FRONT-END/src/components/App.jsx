import { Link } from "react-router";
import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Planets from "../pages/Planets";
import Races from "../pages/Races";
import Classes from "../pages/Classes";
import CharacterDetail from "../pages/CharacterDetail";

import "../styles/App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/races" element={<Races />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
