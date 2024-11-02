import Button from "../Button/Button";
import illustrationWorking from "./../../assets/images/illustration-working.svg";

import "./Info.scss";

const Info = () => {
  return (
    <div className="info">
      <section className="main-info">
        <h1 className="main-info-title">More than just shorter links</h1>
        <p className="main-info-describe">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button btnClassName={"get-started"} data={"Get Started"} />
      </section>
      <img src={illustrationWorking} alt="" />
    </div>
  );
};

export default Info;
