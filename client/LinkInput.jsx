const LinkInput = () => {
  return (
    <>
      <label htmlFor="linkedInUrl"/>
      <input
        type="url"
        id="linkedInUrl"
        name="linkedInUrl"
        placeholder="LinkedIn profile"
        maxLength="140"
        required
      ></input>
    </>
  );
};

export default LinkInput;
