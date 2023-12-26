import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../styles/Start.css";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, i) => {
    let number = i + 0.5;
    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <FaStar className="iconStart" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="iconStart" />
        ) : (
          <AiOutlineStar className="iconStart" />
        )}
      </span>
    );
  });
  return (
    <section className="start">
      <div className="icon-styleStart">
        {ratingStar}
        <p>(отзывы клиентов: {reviews})</p>
      </div>
    </section>
  );
};

export default Star;
