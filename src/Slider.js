import React from "react";
import "./Slider.css";
import img1 from "./Images/img1.png";
import img2 from "./Images/img2.jpeg";
import img3 from "./Images/img3.jpeg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.jpg";
import img7 from "./Images/img7.jpg";
import img8 from "./Images/img8.jpg";
import img9 from "./Images/img9.jpeg";
import img10 from "./Images/img10.jpeg";
import img11 from "./Images/img11.jpeg";
import img12 from "./Images/img12.jpeg";
import img13 from "./Images/img13.jpg";
import img14 from "./Images/img14.jpeg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="sliderImg">
          <img src={img14} alt="error"/>
        </div>
        <div className="sliderImg">
          <img src={img1} alt="error"/>
        </div>
        <div className="sliderImg">
          <img src={img2}  alt="error"/>
        </div>
        <div className="sliderImg">
          <img src={img3}  alt="error"/>
        </div>
        <div className="sliderImg">
          <img src={img4} alt="error"/>
        </div>
        <div className="sliderImg">
          <img src={img5} />
        </div>
        <div className="sliderImg">
          <img src={img6} />
        </div>
        <div className="sliderImg">
          <img src={img7} />
        </div>
        <div className="sliderImg">
          <img src={img8} />
        </div>
        <div className="sliderImg">
          <img src={img9} />
        </div>
        <div className="sliderImg">
          <img src={img10} />
        </div>
        <div className="sliderImg">
          <img src={img11} />
        </div>
        <div className="sliderImg">
          <img src={img12} />
        </div>
        <div className="sliderImg">
          <img src={img13} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
