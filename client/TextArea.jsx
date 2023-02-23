const TextArea = () => {
  return (
    <>
      <form action="/this is where the route path goes" className="card">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Post Title"
          maxLength="60"
          required
          className="card"
        ></input>
        <textarea
          id="post"
          name="post"
          rows="4"
          cols="50"
          maxLength="140"
          required
          className="card"
        >
          make your request or offer here
        </textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default TextArea;
