import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useParams } from "react-router";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  if (!character) {
    return <p>Cargando personaje...</p>;
  }


  return (
    <div>
      <section className="list_title_cont">
        <h1 className="list_title">Character Detail</h1>
        <NavLink className="link" to="/characters">
          Back to Characters
        </NavLink>
      </section>

      <section className="cards_cont">
        <article className="item_card">
          <div className="image_cont">
            <img
              className="item_img"
              src={character.img}
              alt={`imagen de ${character.name}`}
            />
          </div>

          <div className="item_info">
            <h4 className="item_name">{character.name}</h4>

            <div className="item_data">
              <p className="item_data_line">
                <span className="item_label">Gender:</span>{" "}
                {character.gender}
              </p>
              <p className="item_data_line">
                <span className="item_label">Species:</span>{" "}
                {character.race}
              </p>
            </div>
          </div>
        </article>
      </section>
      <NavLink className="link" to="/">
          Back to Home
        </NavLink>
    </div>
  );
}

export default CharacterDetail;
