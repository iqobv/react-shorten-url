import { CARDS } from "./../../constants/cards";
import StatistickCard from "./StatistickCard/StatistickCard";

import "./Statistics.scss";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics-header">
        <h2 className="statistics-header-title">Advanced Statistics</h2>
        <p className="statistics-header-describe">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="statistics-body">
        <ul className="statistics-cards-list">
          {CARDS.map((card, index) => (
            <StatistickCard key={index} card={card} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Statistics;
