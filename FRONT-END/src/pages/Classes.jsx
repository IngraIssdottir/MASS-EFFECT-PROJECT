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
          ← Back to Home
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
              <div className="item_info">
                <h4 className="item_name">{oneClass.name}</h4>
                <div className="item_data">
                  <p className="item_data_line">
                    <span className="item_label">Description: </span>
                    {oneClass.description}
                  </p>
                  <p className="item_data_line">
                    <span className="item_label">Powers: </span>
                    {oneClass.powers}
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

export default Classes;
