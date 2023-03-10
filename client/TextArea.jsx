import { useState } from "react";

// * Here's a good tutorial on forms, when it comes time to add functionality to submit, pick up here on item 4
// https://dmitripavlutin.com/react-forms-tutorial/

const TextArea = () => {
  const [values, setValues] = useState({
    title: "",
    text: "",
    linkedInUrl: "",
    submssion: ""
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <div>
      <form action="/" className="form">
        <h3 className="form">Make a request or offer</h3>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          maxLength="60"
          placeholder="Post Title"
          required
          className="card"
          value={values.title}
          onChange={set("title")}
        />
        <label htmlFor="linkedInUrl">LinkedIn Profile:</label>
        <input
          type="url"
          id="linkedInUrl"
          name="linkedInUrl"
          maxLength="140"
          placeholder="LinkedIn profile"
          required
          className="card"
          value={values.linkedInUrl}
          onChange={set("linkedInUrl")}
        />
        <label htmlFor="submission">Offer or Request:</label>
        <textarea
          id="post"
          name="post"
          rows="4"
          cols="50"
          maxLength="140"
          placeholder="Add your offer or request here"
          required
          className="card"
          value={values.text}
          onChange={set("text")}
        />
        <div onChange={set('submission')}>
          <label htmlFor="submission">
          <input type="radio" name="submission" value="offer" defaultChecked={true}/> Offer
          <input type='radio' name='submission' value='request'/> Request
          </label>
        </div>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TextArea;
