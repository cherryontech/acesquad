import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, title, linkedInUrl, text, submission, calendlyUrl } = props;
  return (
    <div
      className="mb-10 flex flex-col items-center justify-center rounded-lg bg-slate-200 p-10 shadow-lg"
      key={id}
    >
      <h2 className="text-2xl">
        {submission.toUpperCase()}: {title}
      </h2>
      <p className="justify-left rounded-lg bg-slate-300 p-5">{text}</p>
      {linkedInUrl ? (
        <a
          className="text-blue-600 underline visited:text-slate-600 hover:text-blue-800"
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Contact via LinkedIn
        </a>
      ) : null}
      <br />
      {calendlyUrl ? (
        <a
          className="mb-2 text-blue-600 underline visited:text-slate-600 hover:text-blue-800"
          href={calendlyUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Schedule with Calendly
        </a>
      ) : null}
    </div>
  );
};

export default Card;
