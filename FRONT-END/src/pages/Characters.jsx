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
        <NavLink className="link" to="/">
          Volver a Inicio
        </NavLink>
      </section>

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
              <div>
                <h4>{character.name}</h4>
                <p>{character.gender}</p>
                <p>{character.race}</p>
              </div>
            </article>
          );
        })}
        ;
      </section>
    </div>
  );
}

export default Characters;
