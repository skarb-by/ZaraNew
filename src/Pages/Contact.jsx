import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import "../styles/ContactForm.css";
const Contact = (props) => {
  useEffect(() => {
    document.title = `${props.title}`;
  }, [props.title]);
  return (
    <section className="ContactForm">
      <h2 className="titleContactForm">Форма обратной связи</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
