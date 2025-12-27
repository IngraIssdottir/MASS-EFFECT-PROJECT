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
              <div>
                <h4>{planet.name}</h4>
                <p>{planet.description}</p>
                <p>{planet.home_race}</p>
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