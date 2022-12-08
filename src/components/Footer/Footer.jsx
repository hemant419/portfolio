import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rajputhemant4199@gmail.com"
          style={{ textDecoration: "none" }}
          target="_blank" rel="noreferrer"
        >
          <span>rajputhemant4199@gmail.com</span>
        </a>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/hemant_419/?igshid=MDM4ZDc5MmU%3D"
            style={{ textDecoration: "none" }}
            target="_blank" rel="noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.facebook.com/people/Hemant-Rajput/100026174081035/?mibextid=ZbWKwL"
            style={{ textDecoration: "none" }}
            target="_blank" rel="noreferrer"
          >
            {" "}
            <Facebook color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/hemant-rajput-261a79219"
            style={{ textDecoration: "none" }}
            target="_blank" rel="noreferrer"
          >
            {" "}
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a
            href="https://wa.me/+919106330420"
            style={{ textDecoration: "none" }}
            target="_blank" rel="noreferrer"
          >
            {" "}
            <Whatsapp color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
