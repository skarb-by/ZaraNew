import React from "react";

import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaSpotify,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <>
      <section className="Footer">
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Готовы к покупкам?</h3>
              <h3>Тогда вперед!</h3>
              <h3>Отличных Вам покупок!</h3>
            </div>
            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/">ВПЕРЕД</NavLink>
              </Button>
            </div>
          </div>
        </section>
        <footer>
          <hr />
          <div
            className="container grid grid-four-column"
            style={{ marginTop: "10px", gridTemplateColumns: "1fr 1.2fr" }}
          >
            <div className="footer-subscribe">
              <h3 style={{ fontSize: "15px" }}>
                ПОДПИШИТЕСЬ НА НАШУ НОВОСТНУЮ РАССЫЛКУ
              </h3>
              <form action="#">
                <input type="email" name="email" placeholder="ВАШ E-MAIL" />
                <input type="submit" value="ОТПРАВИТЬ" disabled />
              </form>
            </div>
            <div className="footer-social">
              <h3 style={{ textAlign: "center", fontSize: "15px" }}>
                СЛЕДУЙТЕ ЗА НАМИ
              </h3>
              <div
                className="footer-social--icons"
                style={{ marginTop: "45px" }}
              >
                <div>
                  <a
                    href="https://www.tiktok.com/@zara"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTiktok className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/zara/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/Zara"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="icons" />
                  </a>
                </div>

                <div>
                  <a
                    href="https://twitter.com/ZARA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.pinterest.es/zaraofficial/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaPinterest className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/user/zara"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaYoutube className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaSpotify className="icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default React.memo(Footer);
