import { useEffect } from "react";
import "./ShortenField.scss";
import Button from "../../Button/Button";

const ShortenField = () => {
  return (
    <div className="shorten-field">
      <div className="shorten-container">
        <input
          type="text"
          name="url"
          id="url"
          placeholder="Shorten a link here..."
          className="input-url"
          autoComplete="off"
        />
        <Button btnClassName={"shorten"} data={"Shorten It!"} />
      </div>
    </div>
  );
};

export default ShortenField;
