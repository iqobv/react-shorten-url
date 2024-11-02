import Button from "../Button/Button";

import "./Boost.scss";

const Boost = () => {
  return (
    <div className="boost-div">
      <h1 className="boost-title">Boost your links today</h1>
      <Button data={"Get Started"} btnClassName={"get-started"} />
    </div>
  );
};

export default Boost;
