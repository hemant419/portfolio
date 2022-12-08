import React, { useContext, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dd11fmf",
        "template_3trfe3n",
        form.current,
        "9Et2S19fjj9Ka2C5A"
      )
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thanks for Contacting me!!🥳🥳",
            showConfirmButton: false,
            timer: 2000,
          });
          document.getElementById("text").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!!😒😒",
            footer: error,
          });
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            id="text"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            id="email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            id="message"
            required
          />
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
