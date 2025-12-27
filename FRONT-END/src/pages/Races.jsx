import { useState, useEffect } from "react";
import { NavLink } from "react-router";

function Races() {
  //const [charactersList, setCharactersList] = useState(characters);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/races")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRaces(data);
      });
  }, []);

  return (
    <div>
      <section className="list_title_cont">
        <h1 className="list_title">Species</h1>
        <NavLink className="link" to="/">
          Volver a Inicio
        </NavLink>
      </section>

      <section className="cards_cont">
        {races.map((race) => {
          return (
            <article className="item_card" key={race.raceId}>
              <div className="image_cont">
                <img
                  className="item_img"
                  src={race.picture}
                  alt={`imagen de ${race.name}`}
                />
              </div>
              <div>
                <h4>{race.name}</h4>
                <p>Description: {race.description}</p>
                <p>Home wolrd: {race.home_world}</p>
                <p>Category: {race.category}</p>
              </div>
            </article>
          );
        })}
        ;
      </section>
    </div>
  );

}

export default Races;