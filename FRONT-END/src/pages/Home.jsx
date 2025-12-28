import { NavLink } from "react-router";

function Home() {
  return (
    <div className="home">
      {/* TÍTULO */}
      <h1 className="header">Mass Effect Codex</h1>

      {/* MENÚ */}
      <ul className="menu">
        <li className="section_menu">
          <NavLink className="link menu_link" to="/characters">
            <span className="menu_icon_cont">
              <img
                className="menu_icon"
                src="/src/images/paragon.png"
                alt="paragon simbol"
              />
            </span>
            <span className="menu_text">Characters </span>
            <span className="menu_icon_cont">
              <img
                className="menu_icon"
                src="/src/images/renegade.png"
                alt="renegade simbol"
              />
            </span>
          </NavLink>
        </li>

        <li className="section_menu">
          <NavLink className="link menu_link" to="/races">
            <span className="menu_icon">
              <img
                className="menu_icon"
                src="/src/images/paragon.png"
                alt="paragon simbol"
              />
            </span>
            <span className="menu_text">Species </span>
            <span className="menu_icon">
              <img
                className="menu_icon"
                src="/src/images/renegade.png"
                alt="renegade simbol"
              />
            </span>
          </NavLink>
        </li>

        <li className="section_menu">
          <NavLink className="link menu_link" to="/planets">
            <span className="menu_icon">
              <img
                className="menu_icon"
                src="/src/images/paragon.png"
                alt="paragon simbol"
              />
            </span>
            <span className="menu_text">Planets </span>
            <span className="menu_icon">
              <img
                className="menu_icon"
                src="/src/images/renegade.png"
                alt="renegade simbol"
              />
            </span>
          </NavLink>
        </li>

        <li className="section_menu">
          <NavLink className="link menu_link" to="/classes">
            <span className="menu_icon">
              <img
                className="menu_icon"
                src="/src/images/paragon.png"
                alt="paragon simbol"
              />
            </span>
            <span className="menu_text">Classes </span>
            <span className="menu_icon">
              <img
                className="menu_icon"
                src="/src/images/renegade.png"
                alt="renegade simbol"
              />
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;
