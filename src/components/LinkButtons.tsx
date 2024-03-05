import "./LinkButtons.css";

interface LinkButtonsProps {
  url: string;
  label: string;
}

const LinkButtons = ({ url, label }: LinkButtonsProps) => {
  return (
    <>
      <div className="link-buttons">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          {label}
        </a>
      </div>
    </>
  );
};

export default LinkButtons;
