import { NavLink } from "react-router";

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li className="section_menu">
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li className="section_menu">
          <NavLink to="/characters">Personajes</NavLink>
        </li>
        <li className="section_menu">
          <NavLink to="/races">Especies</NavLink>
        </li>
        <li className="section_menu">
          <NavLink to="/planets">Planetas</NavLink>
        </li>
        <li className="section_menu">
          <NavLink to="/classes">Clases</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
