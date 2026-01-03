import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useParams } from "react-router";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://mass-effect-project.onrender.com
/api/characters/${id}`)
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
      </section>

      <article className="detail_card">
        {/* COLUMNA IZQUIERDA */}
        <section className="detail_left">
          {/* Imagen */}
          <div className="detail_image_cont">
            <img
              className="detail_img"
              src={character.img}
              alt={`Imagen de ${character.name}`}
            />
          </div>

          {/* Datos básicos reutilizando estilos */}
          <div className="detail_basic_data">
            <p className="item_data_line">
              <span className="item_label">Gender: </span>
              {character.gender}
            </p>

            <p className="item_data_line">
              <span className="item_label">Species: </span>
              {character.race}
            </p>
          </div>
        </section>

        {/* COLUMNA DERECHA */}
        <section className="detail_right">
          {/* Nombre */}
          <div className="detail_name_cont">
            <h2 className="detail_name">{character.name}</h2>
          </div>

          {/* Texto extendido */}
          <div className="detail_extended_data">
            {character.ch_quote && (
              <p className="item_data_line">
                <span className="item_label">Quote: </span>
                {character.ch_quote}
              </p>
            )}

            {character.ch_description && (
              <p className="item_data_line">
                <span className="item_label">Description: </span>
                {character.ch_description}
              </p>
            )}

            {character.ch_class && (
              <p className="item_data_line">
                <span className="item_label">Class: </span>
                {character.ch_class}
              </p>
            )}

            {character.ch_appearance && (
              <p className="item_data_line">
                <span className="item_label">Appearance: </span>
                {Array.isArray(character.ch_appearance)
                  ? character.ch_appearance.join(", ")
                  : character.ch_appearance}
              </p>
            )}

            {character.ch_is_romanceable !== null && (
              <p className="item_data_line">
                <span className="item_label">Romanceable: </span>
                {character.ch_is_romanceable ? "Yes" : "No"}
              </p>
            )}
          </div>
          <NavLink className="link" to="/characters">
            ← Back to Characters
          </NavLink>
        </section>
      </article>
      <div className="link_to_home_cont">
        <NavLink className="link_to_home" to="/">
          ← Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default CharacterDetail;
