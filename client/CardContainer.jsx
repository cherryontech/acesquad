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
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("offer")}>Offers</button>
      <button onClick={() => setFilter("request")}>Requests</button>
      <DisplayCards filter={filter} />
    </div>
  );}

export default CardContainer;