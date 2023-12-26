import React from "react";
import Product from "./Product";
import "../styles/GridView.css";
const GridView = ({ products }) => {
  return (
    <section className="GridView">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </section>
  );
};
export default GridView;
