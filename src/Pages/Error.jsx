import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import "../styles/Error.css";
import React, { useEffect } from "react";

const ErrorPage = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props.title]);
  return (
    <div className="containerError">
      <div>
        <h2 className="h2Error">404</h2>
        <h3 className="h3Error">Такой старицы НЕТ!</h3>
        <p className="pError">
          Страница, которую вы ищете, не существует. Как вы сюда попали,
          остается загадкой. Но вы можете нажать кнопку ниже, чтобы вернуться на
          главную страницу.
        </p>
        <NavLink to="/">
          <Button>ГЛАВНАЯ</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
