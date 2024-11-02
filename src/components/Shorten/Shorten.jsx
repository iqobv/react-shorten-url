import History from "./History/History";
import ShortenField from "./ShortenField/ShortenField";

import "./Shorten.scss";

const history = [
  { fullLink: "dwadwad", shortenLink: "daw" },
  { fullLink: "dwadwad", shortenLink: "daw" },
  { fullLink: "dwadwad", shortenLink: "daw" },
];

const Shorten = () => {
  return (
    <>
      <div className="shorten">
        <ShortenField />
        <History history={history} />
      </div>
    </>
  );
};

export default Shorten;
