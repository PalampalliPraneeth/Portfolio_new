import React, { useState, useRef  } from "react";
import "./ContactForm.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setMessageError("");

    // Basic validation
    let isValid = true;
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else if (!  (name)) {
      setNameError("Name cannot contain special characters");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    // if (subject.trim() === "") {
    //   setMessageError("Subject is required");
    //   isValid = false;
    // } 

    if (messageText.trim() === "") {
      setMessageError("Message is required");
      isValid = false;
    } else if (!isValidMessage(messageText)) {
      setMessageError("Message cannot contain special characters");
      isValid = false;
    }

    // If all fields are valid, proceed to submit the form
    if (isValid) {
      setMessageSent(true);
      emailjs.sendForm('service_gpdq3hc', 'template_i144hqp', form.current, 'baGbOBfbcmdYcy4aC')
      .then((result) => {
          setName("");
          setEmail("");
          // setSubject("");
          setMessageText("");
          setTimeout(() => setMessageSent(false), 5000);
      }, (error) => {
        console.log('error', error)
      });
    }
  };

  const isValidName = (name) => {
    // Regular expression to match alphanumeric characters and spaces
    const nameRegex = /^[a-zA-Z0-9\s]+$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMessage = (message) => {
    // Regular expression to match alphanumeric characters, spaces, and common punctuation marks
    const messageRegex = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
    return messageRegex.test(message);
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="name-container">
          <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          {/* <input type="text" name="lastname" placeholder="Last Name" /> */}
        </div>
        {nameError && <span className="error">{nameError}</span>}

        <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        {emailError && <span className="error">{emailError}</span>}

        {/* <input type="text" name="Subject" placeholder="Subject" /> */}
        <textarea type="text" name="message" placeholder="Message" rows={3} value={messageText} onChange={(e) => setMessageText(e.target.value)}/>
        {messageError && <span className="error">{messageError}</span>}

        <button>SEND</button>
        {messageSent && <span className="success">Thanks, I'll reply ASAP :)</span>}
      </form>
    </div>
  );
};

export default ContactForm;
