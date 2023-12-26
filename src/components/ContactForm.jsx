import React from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { useAuth } from "hooks/use-auth";

function ContactForm() {
  const { isAuth, email } = useAuth();

  const [state, handleSubmit] = useForm("mzblnqwl");
  if (state.succeeded) {
    return (
      <>
        <h3>Спасибо!</h3>
        <h3>Форма была успешно отправлена.</h3>
        <h3>
          Вернуться на{" "}
          <Link to="/" className="navbar-linkContactForm">
            Главную
          </Link>
        </h3>
      </>
    );
  }
  return (
    <div className="containerContactForm">
      <div className="divContactForm">
        <form className="inputsContactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ваше имя"
            name="username"
            required
            autoComplete="off"
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Ваш Email"
            autoComplete="off"
            value={isAuth ? email : null}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Введите текст сообщения"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <input type="submit" value="Отправить" />
        </form>
      </div>
    </div>
  );
}

export default React.memo(ContactForm);
