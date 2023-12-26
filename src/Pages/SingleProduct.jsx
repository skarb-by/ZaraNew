import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import FormatPrice from "../Helpers/FormatPrice";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";
import "../styles/SingleProduct.css";

const API = "http://127.0.0.2:4000/products/";

const SingleProduct = (props) => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();
  const {
    id: sheela,
    image,
    name,
    view,
    description,
    description1,
    description2,
    stock,
    stars,
    reviews,
    price,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
    document.title = `${props.title}/${name}`;
  }, [name, props.title]);

  if (isSingleLoading) {
    return <div className="page_loading">Загрузка.........</div>;
  }
  return (
    <section className="SingleProduct">
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <MyImage imgs={image} />
          </div>
          <div className="product-data">
            <h2 style={{ fontSize: "20px" }}>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p>просмотры: {reviews}</p>
            <p className="product-data-price ">
              Стоимость без скидки:
              <del>
                <FormatPrice price={price + (price / 100) * 25} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Стоимость со скидкой:
              <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <p>{description1}</p>
            <p>{description2}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Супер быстрая доставка от 20,00 BYN</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>Замена брака в течении 30 дней</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>Бесконтактная доставка</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                В наличии: <span>{stock > 0 ? "ДА" : "НЕТ"}</span>
              </p>
              <p>
                Категория: <span> {view} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(SingleProduct);
