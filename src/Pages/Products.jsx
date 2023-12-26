import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";
import React, { useEffect } from "react";
import "../styles/Products.css";

const Products = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props.title]);

  return (
    <section className="Products">
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </section>
  );
};

export default React.memo(Products);
