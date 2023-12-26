import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
import "../styles/ListView.css";

const ListView = ({ products }) => {
  return (
    <section className="ListView">
      <div className="container grid">
        {products.map((el) => {
          const { id, name, image, price, description } = el;
          return (
            <div className="card grid grid-two-column">
              <figure>
                <img src={image[0].url} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 90)}...</p>
                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <Button className="btn">ПОДРОБНЕЕ</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(ListView);
