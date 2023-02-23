

const TextArea = () => {

  return (
    <>
      <form
        action='/this is where the route path goes'>
        <textarea
          id="post"
          name="post"
          rows="4"
          cols="50"
          maxLength="140"
          required
        >
          make your request or offer here
        </textarea>
        <br/>
        <input type='submit' value='submit'/>
      </form>
    </>
  );
}

export default TextArea;