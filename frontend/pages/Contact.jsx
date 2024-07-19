import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Hero
        title={"Contact Us | ZeeCare Medical Institute"}
        imageUrl={"/contact.png"}
      />
      <ContactForm />
    </>
  );
};

export default Contact;
