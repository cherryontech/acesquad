import { useState } from "react";
import validator from "validator";

// * Here's a good tutorial on forms, when it comes time to add functionality to submit, pick up here on item 4
// https://dmitripavlutin.com/react-forms-tutorial/

const TextArea = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    title: "",
    text: "",
    linkedInUrl: "",
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const validate = (value) => {
    if (validator.isURL(value)) {
      setErrorMessage("Valid URL");
    } else {
      setErrorMessage("Not a valid URL");
    }
  };
  //  const urlOnChange = (e, name) => {
  //   if (validate(e.target.value)){
  //     set(name);
  //   }
  //  }

  return (
    <>
      <form action="/" className="card">
        <h3>Make a request or offer</h3>
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
          // onChange={(e) => {validate(e.target.value); set('linkedInUrl')}}
        />
        <span>{errorMessage}</span>
        <label htmlFor="post">Offer or Request:</label>
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
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default TextArea;
