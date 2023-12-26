import { useCartContext } from "../context/cart_context";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import FormatPrice from "../Helpers/FormatPrice";
import "../styles/Cart.css";
import { useAuth } from "hooks/use-auth";
import React, { useEffect } from "react";

const Cart = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props.title]);

  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  const { isAuth, email } = useAuth();
  if (cart.length === 0) {
    return (
      <div className="CartNull">
        <h3>Нет товаров</h3>
      </div>
    );
  }
  return (
    <section className="Cart">
      <div className="container">
        {isAuth && (
          <div className="cart-user--profile">
            <h2 className="cart-user--name">
              Вы вошли как: <span>{email}</span>
            </h2>
          </div>
        )}
        <div className="cart_heading grid grid-five-column">
          <p>Товар</p>
          <p className="cart-hide">Цена</p>
          <p>Количество</p>
          <p className="cart-hide">Итог</p>
          <p>Удалить</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/products">
            <Button>ПРОДОЛЖИТЬ ПОКУПКИ</Button>
          </NavLink>
          <Button
            className="btn btn-clear"
            style={{ marginTop: "0" }}
            onClick={clearCart}
          >
            ОЧИСТИТЬ КОРЗИНУ
          </Button>
        </div>
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>Цена:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>Стоимость доставки:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>Итого:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
            {isAuth && (
              <div
                className="cart-two-button-rez"
                style={{ justifyContent: "center" }}
              >
                <Button
                  className="cart-two-button"
                  style={{
                    marginTop: "0",
                    width: "200px",
                    justifyContent: "center",
                  }}
                >
                  ОПЛАТИТЬ
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Cart);
