import { useState } from "react";

import Button from "../../../Button/Button";

const CopyButton = ({ history }) => {
  const [copy, setCopy] = useState(false);

  const handleSetCopy = () => {
    navigator.clipboard.writeText(history.data.url);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <>
      {!copy ? (
        <Button onClick={handleSetCopy} data={"Copy"} btnClassName={"copy"} />
      ) : (
        <Button disabled={true} data={"Copied!"} btnClassName={"copy active"} />
      )}
    </>
  );
};

export default CopyButton;
