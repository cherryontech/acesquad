import { Link } from "react-router-dom";

const Card = ({ id, title, linkedInUrl, text, submission }) => {
  return (
    <Link to={`/`} className="card">
      <div className="info">
        <h2>
          Offer{submission}:Title{title}
        </h2>
        <p>Text{text}</p>
        <a href={linkedInUrl} />
      </div>
    </Link>
  );
};

export default Card; 
