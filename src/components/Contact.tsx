import LinkButtons from "./LinkButtons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Please contact me at shellywu37@gmail.com or through this form.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <LinkButtons />
    </div>
  );
};

export default Contact;
