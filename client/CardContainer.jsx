import { useState } from "react"
import DisplayCards from "./DisplayCards";
import { Link } from "react-router-dom";


const CardContainer = () => {

    const [ filter, setFilter ] = useState('all')

  return (
    <div>
      <Link
        to={`/submit`}
        className="text-3xl italic text-blue-600 underline visited:text-purple-600 hover:text-blue-800 mb-5"
      >
        Create an offer or request
      </Link>
      <br />
      <button
        className="over:opacity-50 m-2 rounded bg-orange-500 p-2 px-6 text-white "
        onClick={() => setFilter("all")}
        aria-label="Remove Filter"
      >
        All
      </button>
      <button
        className="over:opacity-50 m-2 rounded bg-orange-500 p-2 px-6 text-white "
        onClick={() => setFilter("offer")}
        aria-label="filter by offers"
      >
        Offers
      </button>
      <button
        className="over:opacity-50 m-2 rounded bg-orange-500 p-2 px-6 text-white "
        onClick={() => setFilter("request")}
        aria-label="filter by requests"
      >
        Requests
      </button>
      <DisplayCards filter={filter} />
    </div>
  );}

export default CardContainer;
