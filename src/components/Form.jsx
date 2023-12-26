import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Form.css";

const Form = ({ title, handleClick, name }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const regist = (
    <h3 style={{ paddingTop: "20px", textAlign: "left" }}>
      Пройти{" "}
      <Link to="/register" className="navbar-linkForm">
        регистрацию
      </Link>
    </h3>
  );
  const sing = (
    <h3 style={{ paddingTop: "20px", textAlign: "left" }}>
      У вас уже есть учетная запись?{" "}
      <Link to="/login" className="navbar-linkForm">
        Войти
      </Link>
    </h3>
  );
  return (
    <section className="Form">
      <h2 className="titleForm">{title}</h2>
      <div className="containerForm">
        <div className="singForm">
          <div className="singFormInputs">
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="ваш email"
            />
            <input
              id="pass"
              className="input"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type="password"
              placeholder="ваш пароль"
            />
            <input
              style={{ maxWidth: "19rem" }}
              type="submit"
              value={title}
              onClick={() => handleClick(email, pass)}
            />
          </div>
          {title === "Регистрация" ? sing : regist}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Form);
