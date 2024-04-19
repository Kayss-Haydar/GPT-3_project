// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let`s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed for travelling assistance indulgence unpleasing Not thoughts
          all exercise blessing. indulgenceway everthing joy alteration
          bositerous the attachment party we years to order alow asked of
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people Recusted access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
