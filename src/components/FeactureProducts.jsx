import { useProductContext } from "../context/productContext";

import Product from "./Product";
import "../styles/FeactureProducts.css";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div style={{ fontSize: "10px" }}>Загрузка.........</div>;
  }
  return (
    <section className="featureProducts">
      <div className="container">
        <div className="intro-data">Посмотрите!</div>
        <div className="common-heading">Наши товары</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
