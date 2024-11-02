import Button from "../../Button/Button";
import "./History.scss";

const History = ({ history }) => {
  if (history.length === 0) return <></>;

  return (
    <div className="history">
      <ul className="history-list">
        {history.map((el, index) => (
          <li key={index} className="history-list-item">
            <a
              href={el.fullLink}
              target="_blank"
              className="history-list-item-full-link"
            >
              {el.fullLink}
            </a>
            <div className="result-div">
              <a
                href={el.shortenLink}
                target="_blank"
                className="history-list-item-shorten-link"
              >
                {el.shortenLink}
              </a>
              <Button data={"Copy"} btnClassName={"copy"} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
