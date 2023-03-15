import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, title, linkedInUrl, text, submission, calendlyUrl } = props;
  return (
    <div className="form" key={id}>
      <h2>
        {submission}: {title}
      </h2>
      <p>{text}</p>
      <a href={linkedInUrl} target="_blank" rel="noreferrer noopener">
        Contact via LinkedIn
      </a>
      {calendlyUrl ? (
      <a href={calendlyUrl} target="_blank" rel="noreferrer noopener">
        Schedule with Calendly
      </a>) : null }
    </div>
  );
};

export default Card;
