import { useEffect, useState } from "react";
import { useInput } from "../../../hooks/useInput";

import capitalize from "lodash.capitalize";

import Button from "../../Button/Button";

import "./ShortenField.scss";

const ShortenField = ({ error, changeFullUrl }) => {
  const { value, changeValue } = useInput();
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    setInputError(error);
  }, [error]);

  const handleChangeValue = (e) => {
    changeValue(e.target.value);
    setInputError("");
  };

  const handleCLickChangeFullUrl = () => {
    if (value) {
      changeFullUrl(value);
    } else {
      setInputError("Please add a link");
    }
  };

  return (
    <div className="shorten-field">
      <div className="shorten-container">
        <div
          data-error-text={capitalize(inputError) || ""}
          className={`input-container ${inputError ? "error" : ""}`}
        >
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Shorten a link here..."
            className={`input-url ${inputError ? "error" : ""}`}
            autoComplete="off"
            value={value}
            onChange={handleChangeValue}
          />
        </div>
        <Button
          onClick={handleCLickChangeFullUrl}
          btnClassName={"shorten"}
          data={"Shorten It!"}
        />
      </div>
    </div>
  );
};

export default ShortenField;
