import { useState, useEffect } from "react";
import { NavLink } from "react-router";

function Classes() {
  //const [charactersList, setCharactersList] = useState(characters);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/classes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div>
      <section className="list_title_cont">
        <h1 className="list_title">Classes</h1>
        <NavLink className="link" to="/">
          Volver a Inicio
        </NavLink>
      </section>

      <section className="cards_cont">
        {classes.map((oneClass) => {
          return (
            <article className="item_card" key={oneClass.oneClassId}>
              <div className="image_cont">
                <img
                  className="item_img"
                  src={oneClass.picture}
                  alt={`imagen de ${oneClass.name}`}
                />
              </div>
              <div>
                <h4>{oneClass.name}</h4>
                <p>{oneClass.description}</p>
                <p>{oneClass.powers}</p>
              </div>
            </article>
          );
        })}
        ;
      </section>
    </div>
  );

}

export default Classes;