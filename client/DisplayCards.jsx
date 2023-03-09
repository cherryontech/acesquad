import cards from "./cardDetails";
import Card from "./Card";
import { Link } from "react-router-dom";

const DisplayCards = (cards) => {
  return (
    <div>
      <Link to={`/submit`} className="offer-request-button"> Create an offer or request </Link>
      <Card />
    </div>
  );
};

export default DisplayCards;
