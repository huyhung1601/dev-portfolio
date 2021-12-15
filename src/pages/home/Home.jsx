import React from "react";
import { useState, useEffect } from "react";

import "./home.scss";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-left">
        <div className="home-bg-cards">
          <div className="home-bg-card three">
            <img src="./bg1.jpg" alt="" />
          </div>
          <div className="home-bg-card two"></div>
          <div className="home-bg-card one"></div>
          {/* <div className="shadow one"></div>
        <div className="shadow two"></div>  */}
        </div>
        <div className="bg-details">
          <h2 className="home-bg-title">Design Thinking</h2>
          <p className="home-bg-content">
            Design thinking can also help create the right environment for real
            and much broader understanding of the voice of the customer. It
            helps move beyond the monologue of research and, if incorporating
            prototyping and testing, begins an ongoing process of dialogue with
            current and potential customers
          </p>
        </div>
      </div>

      <div className="home-right">
        <div className="home-right-container">
          <span />
          <span />
          <span />
          <h2>Hi There, </h2>
          <h3>I'm Henry, </h3>
          <h3>Web Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
