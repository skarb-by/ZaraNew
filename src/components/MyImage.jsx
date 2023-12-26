import React from "react";
import { useState } from "react";
import "../styles/MyImage.css";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <section className="MyImage">
      <div className="grid grid-four-column">
        {imgs.map((el, index) => {
          return (
            <figure>
              <img
                src={el.url}
                alt={el.filename}
                className="box-image-style"
                key={index}
                onClick={() => setMainImage(el)}
              />
            </figure>
          );
        })}
      </div>
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </section>
  );
};

export default MyImage;
