import json from "./cardDetails";
import Card from "./Card";

const DisplayCards = ({filter}) => {

  const lowerFilter = filter.toLowerCase()

  const filteredCards = json.filter((el) => el.submission === lowerFilter);

  return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {(filter === "all") ? (json.map((submission) => {
          return (
            <Card
              id={submission.id}
              title={submission.title}
              linkedInUrl={submission.linkedInUrl}
              calendlyUrl={submission.calendlyUrl}
              text={submission.text}
              submission={submission.submission}
            />
          );
        })) : (filteredCards.map((submission) => {
          return (
            <Card
              id={submission.id}
              title={submission.title}
              linkedInUrl={submission.linkedInUrl}
              calendlyUrl={submission.calendlyUrl}
              text={submission.text}
              submission={submission.submission}
            />
          );
        }))}
    </div>
  );
};

export default DisplayCards;
