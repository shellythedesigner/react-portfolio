import LinkButtons from "./LinkButtons";
import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="Form-container">
      <h2>Contact Me</h2>
      <p>Please contact me at shellywu37@gmail.com or through this form.</p>
      <form className="Form-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          // onChange={handleNameChange}
          onChange={(e) => setName(e?.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e?.target.value)}
        />
        <textarea
          placeholder="Your Message (min. length: 10 characters)"
          value={message}
          onChange={(e) => setMessage(e?.target.value)}
        ></textarea>
        <button
          type="submit"
          disabled={message.length <= 10}
          className="submit-button"
        >
          Send
        </button>
      </form>
      <div className="link-buttons-container">
        <LinkButtons
          url="https://www.linkedin.com/in/shellythedesigner/"
          label="LinkedIn"
        />
        <LinkButtons
          url="https://github.com/shellythedesigner"
          label="GitHub"
        />
        <LinkButtons url="/public/resume.pdf" label="Resume" />
      </div>
    </div>
  );
};

export default Form;
