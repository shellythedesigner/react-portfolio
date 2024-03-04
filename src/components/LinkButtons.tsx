import './LinkButtons.css';


const LinkButtons = () => {
  return (
    <>
      <div className="link-buttons">
        <a href="https://www.linkedin.com/in/shellythedesigner/" target="_blank" rel="noopener noreferrer" className="link-button">LinkedIn</a>
        <a href="https://github.com/shellythedesigner" target="_blank" rel="noopener noreferrer" className="link-button">GitHub</a>
        <a href="/public/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-button">Resume</a>
      </div>
    </>
  );
}

export default LinkButtons;