import React from "react";
import AliceCarousel from "react-alice-carousel";
import "../styles/Truested.css";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="slide">
    <img
      src="./images/slider/001.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/002.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/003.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/004.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/005.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/006.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/007.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/008.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/009.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/010.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/011.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/012.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/013.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/014.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/015.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/016.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/017.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
  <div className="slide">
    <img
      src="./images/slider/018.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
    ,
  </div>,
];

const Truested = () => {
  return (
    <section className="Truested">
      <div className="container">
        <div className="brand-section-slider">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
            touchTracking={true}
            disableDotsControls={true}
            disableButtonsControls={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Truested;
