import { useState } from "react";

// * Here's a good tutorial on forms, when it comes time to add functionality to submit, pick up here on item 4
// https://dmitripavlutin.com/react-forms-tutorial/

const TextArea = () => {
  const [values, setValues] = useState({
    title: "",
    text: "",
    linkedInUrl: "",
    calendlyUrl: "",
    submission: "",
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        action="/"
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-slate-200 p-10 shadow-lg"
      >
        <h1 className="text-sans text-2xl">Make a request or offer:</h1>
        <label className="m-1" htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          maxLength="50"
          placeholder="Post Title"
          required
          value={values.title}
          onChange={set("title")}
          className="mb-3 block w-60"
        />
        <label className="m-1" htmlFor="linkedInUrl">
          LinkedIn Profile:
        </label>
        <input
          type="url"
          id="linkedInUrl"
          name="linkedInUrl"
          maxLength="140"
          placeholder="LinkedIn profile"
          required
          className="mb-3 block w-60"
          value={values.linkedInUrl}
          onChange={set("linkedInUrl")}
        />
        <label className="m-1" htmlFor="calendlyUrl">
          Calendly Link:
        </label>
        <input
          type="url"
          id="calendlyUrl"
          name="calendlyUrl"
          maxLength="140"
          placeholder="Calendly Link"
          required
          className="mb-3 block w-60"
          value={values.calendlyUrl}
          onChange={set("calendlyUrl")}
        />
        <label className="m-1" htmlFor="submission">
          Offer or Request:
        </label>
        <textarea
          aria-label="Add details about your offer or request here"
          id="post"
          name="post"
          rows="4"
          cols="50"
          maxLength="140"
          placeholder="Add your offer or request here"
          required
          className="mb-4 block w-60"
          value={values.text}
          onChange={set("text")}
        />
        <fieldset>
          <legend>I am making a(n)</legend>
          
          <div onChange={set("submission")}> 
            <label htmlFor="offer" aria-label="offer">
              Offer
            </label>
            <input
              id="offer"
              type="radio"
              name="submission"
              value="offer"
              defaultChecked={true}
              onChange={set("submission")}
            />
            <label htmlFor="request" aria-label="request">
              Request
            </label>
            <input
              id="request"
              type="radio"
              name="submission"
              value="request"
              onChange={set("submission")}
            />
          </div>
        </fieldset>
        <input className="button" type="submit" value="Submit" />
      </form>
      {title.values}
    </div>
  );
};

export default TextArea;
