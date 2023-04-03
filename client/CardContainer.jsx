import { useState } from "react"
import DisplayCards from "./DisplayCards";
import { Link } from "react-router-dom";


const CardContainer = () => {

    const [ filter, setFilter ] = useState('all')

  return (
    <div>
      <Link to={`/submit`} className="offer-request-button">
        Create an offer or request
      </Link>
      <br />
      <button onClick={() => setFilter("all")} aria-label= "Remove Filter">All</button>
      <button onClick={() => setFilter("offer")} aria-label="filter by offers">Offers</button>
      <button onClick={() => setFilter("request")} aria-label="filter by requests">Requests</button>
      <DisplayCards filter={filter} />
    </div>
  );}

export default CardContainer;