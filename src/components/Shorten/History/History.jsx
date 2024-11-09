import CopyButton from "./CopyButton/CopyButton";

import "./History.scss";

const History = ({ history }) => {
  if (history.length === 0) return <></>;

  return (
    <div className="history">
      <ul className="history-list">
        {history.map((el, index) => (
          <li key={index} className="history-list-item">
            <a
              href={el.data.full}
              target="_blank"
              className="history-list-item-full-link"
            >
              {el.data.full}
            </a>
            <div className="result-div">
              <a
                href={el.data.url}
                target="_blank"
                className="history-list-item-shorten-link"
              >
                {el.data.url}
              </a>
              <CopyButton history={el} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
