import { NavLink } from "react-router";

function Home() {
  return (
    <div>
      <h1 className="header">Mass Effect Codex</h1>;
      <ul className="menu">
        <li className="section_menu">
          <NavLink className="link" to="/characters">Personajes</NavLink>
        </li>
        <li className="section_menu">
          <NavLink className="link" to="/races">Especies</NavLink>
        </li>
        <li className="section_menu">
          <NavLink className="link" to="/planets">Planetas</NavLink>
        </li>
        <li className="section_menu">
          <NavLink className="link" to="/classes">Clases</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;
