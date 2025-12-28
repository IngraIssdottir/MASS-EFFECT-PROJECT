import { useState, useEffect } from "react";
import { NavLink } from "react-router";

function Characters() {
  //const [charactersList, setCharactersList] = useState(characters);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/characters")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return (
    <div>
      <section className="list_title_cont">
        <h1 className="list_title">Personajes</h1>
      </section>
      <div className="link_to_home_cont">
        <NavLink className="link_to_home" to="/">
          ← Back to Home
        </NavLink>
      </div>
      <section className="cards_cont">
        {characters.map((character) => {
          return (
            <article className="item_card" key={character.characterId}>
              <div className="image_cont">
                <img
                  className="item_img"
                  src={character.img}
                  alt={`imagen de ${character.name}`}
                />
              </div>
              <div className="item_info">
                <h4 className="item_name">
                  <NavLink className="link" to={`/characters/${character.id}`}>
                    {character.name}
                  </NavLink>
                </h4>
                <div className="item_data">
                  <p className="item_data_line">
                    <span className="item_label">Gender: </span>
                    {character.gender}
                  </p>
                  <p className="item_data_line">
                    <span className="item_label">Species: </span>
                    {character.race}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
        ;
      </section>
      <div className="link_to_home_cont">
        <NavLink className="link_to_home" to="/">
          ← Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default Characters;
