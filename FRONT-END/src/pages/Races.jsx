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
              <div className="item_info">
                <h4 className="item_name">{race.name}</h4>
                <div className="item_data">
                  <p className="item_data_line">
                    <span className="item_label">Description: </span>
                    {race.description}
                  </p>
                  <p className="item_data_line">
                    <span className="item_label">Home wolrd: </span>
                    {race.home_world}
                  </p>
                  <p className="item_data_line">
                    <span className="item_label">Category: </span>
                    {race.category}
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

export default Races;
