import { useState, useEffect } from "react";
import { NavLink } from "react-router";

function Planets() {
  //const [charactersList, setCharactersList] = useState(characters);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/planets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPlanets(data);
      });
  }, []);

  return (
    <div>
      <section className="list_title_cont">
        <h1 className="list_title">Planets</h1>
        <NavLink className="link" to="/">
          Volver a Inicio
        </NavLink>
      </section>

      <section className="cards_cont">
        {planets.map((planet) => {
          return (
            <article className="item_card" key={planet.planetId}>
              <div className="image_cont">
                <img
                  className="item_img"
                  src={planet.picture}
                  alt={`imagen de ${planet.name}`}
                />
              </div>
              <div className="item_info">
                <h4 className="item_name">{planet.name}</h4>
                <div className="item_data">
                  <p className="item_data_line">
                    <span className="item_label">Description: </span>
                    {planet.description}
                  </p>
                  <p className="item_data_line">
                    <span className="item_label">Home planet of: </span>
                    {planet.home_race}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
        ;
      </section>
    </div>
  );
}

export default Planets;
