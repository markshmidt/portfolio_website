import React from "react";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">MY CONTACTS</h1>

      <p className="contact-subtitle">
        I am always open for new collaborations and opportunities! <br />
        If you want to stay in touch, you can write to me here or contact me in
        any convenient way.
      </p>

      <div className="contact-grid">
        {/* LEFT */}
        <div className="contact-left">
          <p className="contact-item">
             </p>

          <p className="contact-item">
            <strong>Location</strong><br />
            Toronto, Canada
          </p>

          <div className="contact-links">
            <a href="mailto:masha.shmidt.04@gmail.com">
              masha.shmidt.04@gmail.com
            </a>
            <a href="https://github.com/markshmidt" target="_blank" rel="noreferrer">
              github.com/markshmidt
            </a>
            <a
              href="https://linkedin.com/in/mariia-shmidt-dev"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/mariia-shmidt-dev
            </a>
          </div>

      </div>
        {/* RIGHT */}
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
