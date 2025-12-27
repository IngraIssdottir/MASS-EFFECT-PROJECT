import { useState, useEffect } from "react";
import { NavLink } from "react-router";

/*const characters = [
  {
    characterId: 0,
    name: "Commander Shepard",
    gender: "Female/Male",
    race: "Human",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJw7yivIx9SU6dVshPN1L8h-J-tGcZNGvNw&s",
  },
  {
    characterId: 1,
    name: "Garrus Vakarian",
    gender: "Male",
    race: "Turian",
    img: "https://static.wikia.nocookie.net/masseffect/images/3/36/Garrus_Character_Shot.png",
  },
  {
    characterId: 2,
    name: "Tali'Zorah nar Rayya",
    gender: "Female",
    race: "Quarian",
    img: "https://static.wikia.nocookie.net/masseffect/images/2/2f/Talicharactershotme2.jpg",
  },
  {
    characterId: 3,
    name: "Legion",
    gender: "A.I.",
    race: "Geth",
    img: "https://static.wikia.nocookie.net/masseffect/images/2/25/Legion.png",
  },
];*/

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
                <h4>Nombre: {character.name}</h4>
                <p>Género: {character.gender}</p>
                <p>Especie: {character.race}</p>
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
