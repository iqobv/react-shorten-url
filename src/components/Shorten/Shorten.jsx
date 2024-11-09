import History from "./History/History";
import ShortenField from "./ShortenField/ShortenField";

import "./Shorten.scss";
import { useShorten } from "../../hooks/useShorten";

const Shorten = () => {
  const { history, error, changeFullUrl } = useShorten();

  return (
    <>
      <div className="shorten">
        <ShortenField error={error} changeFullUrl={changeFullUrl} />
        <History history={history} />
      </div>
    </>
  );
};

export default Shorten;
