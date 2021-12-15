import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./rotateCard.scss";
import laptop from "./laptop.png";
import { useRef } from "react";

const RotateCard = () => {
  const cardRef = useRef();
  const containerRef = useRef();
  const nameRef = useRef();
  const imgRef = useRef();
  const infosRef = useRef();
  const refs = [nameRef, imgRef, infosRef];
  //Moving Animation Event
  const mouseMove = (e) => {
    let xAxis = (window.innerWidth / 4 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

    cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };
  //Animation on
  const mouseEnter = (e) => {
    cardRef.current.style.transition = "none";
    //Popout
    refs.forEach((ref) => {
      ref.current.style.transform = `translateZ(${
        ref === imgRef ? "100px" : "50px"
      })`;
    });
    nameRef.current.style.textShadow = `1px 1px 1px #505457, 1px 2px 1px #808283,
        1px 15px 6px rgba(16, 16, 16, 0.7)`;
    imgRef.current.style.filter = `drop-shadow(3px 10px 1px #424242)`;

    infosRef.current.style.textShadow = `none`;
    infosRef.current.style.filter = `drop-shadow(3px 5px 1px #424242)`;
  };
  //Animation out
  const mouseLeave = (e) => {
    cardRef.current.style.transition = "all 0.5s ease";
    cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    refs.forEach((ref) => {
      ref.current.style.transform = "translateZ(0)";
    });

    nameRef.current.style.textShadow = `1px 1px 1px #505457, 1px 2px 1px #808283,
        1px 5px 6px rgba(16, 16, 16, 0.4)`;

    imgRef.current.style.filter = `drop-shadow(3px 2px 1px #424242)`;
    infosRef.current.style.textShadow = `1px 1px 1px #505457, 1px 2px 1px #808283,
        1px 5px 6px rgba(16, 16, 16, 0.4)`;
    infosRef.current.style.filter = `none`;
  };
  return (
    <div
      ref={containerRef}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      className="card-container"
    >
      <div ref={cardRef} className="card">
        <h1 ref={nameRef} className="card-name">
          Henry Nguyen
        </h1>

        <img ref={imgRef} className="card-img" src={laptop} alt="" />

        <ul ref={infosRef} className="card-infos">
          <li>
            <MdEmail className="card-info-icon" />
            <p className="card-info">huyhung160@gmail.com</p>
          </li>
          <li>
            <MdPhone className="card-info-icon" />
            <p className="card-info">0420 600 611</p>
          </li>
          <li>
            <MdLocationOn className="card-info-icon" />
            <p className="card-info">Canberra, ACT, Australia</p>
          </li>
          <li>
            <AiFillGithub className="card-info-icon" />
            <a
              href="https://github.com/huyhung1601"
              target="_blank"
              className="card-info"
            >
              Github
            </a>
          </li>
          <li>
            <AiFillLinkedin className="card-info-icon" />
            <a
              href="https://www.linkedin.com/in/henry-nguyen-0a03989b/"
              target="_blank"
              className="card-info"
            >
              Linked In
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RotateCard;

