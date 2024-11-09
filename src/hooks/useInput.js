import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const changeValue = (val) => {
    setValue(val);
    console.log(val);
  };

  return {
    value,
    changeValue,
  };
};
