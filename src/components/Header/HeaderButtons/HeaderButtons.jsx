import Button from "../../Button/Button";

import "./HeaderButtons.scss";

const HeaderButtons = () => {
  return (
    <div className="buttons">
      <Button btnClassName={"login"} data={"Login"} />
      <Button btnClassName={"sign-up"} data={"Sign Up"} />
    </div>
  );
};

export default HeaderButtons;
