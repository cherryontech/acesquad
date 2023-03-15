import json from "./cardDetails";
import Card from "./Card";

const DisplayCards = () => {
  return (
    <div>
      {!json.length ? (
        <h1>Be the first to make an offer or request!</h1>
      ) : (
        json.map((submission) => {
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
        })
      )}
    </div>
  );
};

export default DisplayCards;
