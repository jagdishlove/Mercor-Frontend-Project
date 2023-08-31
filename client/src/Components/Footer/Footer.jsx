import React from "react";
import "./Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineApple,
} from "react-icons/ai";
import { BsTwitch, BsGooglePlay } from "react-icons/bs";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="btns">
        <button>
          <AiOutlineApple size={20} />
          App Store
        </button>
        <button>
          <BsGooglePlay />
          Google Pay
        </button>
      </div>
      <div className="middle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        distinctio unde amet iusto vel quo facilis recusandae aspernatur dolores
        porro. Culpa tempora quo explicabo adipisci commodi officiis. Facilis,
        rem dolores!
      </div>
      <div className="right">
        <a href="#">
          <AiOutlineInstagram size={40} color="black" />
        </a>
        <a href="#">
          <AiOutlineTwitter size={40} color="black" />
        </a>
        <a href="#">
          <BsTwitch size={35} color="black" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
