import { useState } from "react"
import DisplayCards from "./DisplayCards";
import { Link } from "react-router-dom";


const CardContainer = () => {

    const [ filter, setFilter ] = useState('all')

  return (
    <div>
      <Link
        to={`/submit`}
        className="mb-5 text-3xl italic text-blue-600 underline visited:text-slate-600 hover:text-blue-800 text-center"
      >
        Create an offer or request
      </Link>
      <br />
      <div className="grid h-56 grid-cols-3 content-center gap-4">
        <button
          className="over:opacity-50 m-2 basis-1 rounded bg-orange-500 p-2 px-6 text-white "
          onClick={() => setFilter("all")}
          aria-label="Remove Filter"
        >
          All
        </button>
        <button
          className="over:opacity-50 m-2 basis-1 rounded bg-orange-500 p-2 px-6 text-white"
          onClick={() => setFilter("offer")}
          aria-label="filter by offers"
        >
          Offers
        </button>
        <button
          className="over:opacity-50 m-2 basis-1 rounded bg-orange-500 p-2 px-6 text-white"
          onClick={() => setFilter("request")}
          aria-label="filter by requests"
        >
          Requests
        </button>
      </div>
      <DisplayCards filter={filter} />
    </div>
  );}

export default CardContainer;
