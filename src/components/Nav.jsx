import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import "../styles/Nav.css";
import { Button } from "../styles/Button";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import { removeUser } from "Reducer/userSlice";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return (
    <nav className="Nav">
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Магазин
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Напиши нам
            </NavLink>
          </li>
          {isAuth && <p>{email}</p>}
          {isAuth ? (
            <li>
              <Button onClick={() => dispatch(removeUser())}>
                <NavLink to="/" onClick={() => setMenuIcon(false)}>
                  Выйти
                </NavLink>
              </Button>
            </li>
          ) : (
            <li>
              <Button>
                <NavLink to="/login" onClick={() => setMenuIcon(false)}>
                  Войти
                </NavLink>
              </Button>
            </li>
          )}
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => setMenuIcon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> {total_item} </span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
