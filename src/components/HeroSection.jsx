import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import "../styles/HeroSection.css";
const HeroSection = ({ myData }) => {
  const {name } = myData;
  return (
    <section className="HeroSection">
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Добро пожаловать</p>
            <h1 className="image">{name}</h1>
            <p>Компания</p>
            <p>
              Zara является одной из крупнейших мировых компаний в сфере
              производства модной одежды. Она входит в группу Inditex, одну из
              крупнейших мировых дистрибьюторских групп.
            </p>
            <p>
              Клиент находится в самом центре нашей особенной бизнес-модели,
              включающей дизайн, производство, дистрибьюторскую деятельность и
              реализацию через обширную собственную сеть магазинов.
            </p>
            <p>
              Более подробная информация приведена на корпоративном сайте группы
              Inditex:{" "}
              <a href="https:/www.inditex.com" target="_blank" rel="noreferrer">
                www.inditex.com
              </a>
            </p>
            <NavLink to="/products">
              <Button>Магазин</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img 
                src="https://raw.githubusercontent.com/skarb-by/images/main/hero.jpg"
                alt="hero"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
