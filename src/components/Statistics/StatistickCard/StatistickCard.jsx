import "./StatistickCard.scss";

const StatistickCard = ({ card }) => {
  return (
    <li className="statistics-cards-list-item">
      <div className="icon">
        <img className="icon-img" src={card.imgPath} alt={card.title} />
      </div>
      <h2 className="cards-list-item-title">{card.title}</h2>
      <p className="cards-list-item-describe">{card.describe}</p>
    </li>
  );
};

export default StatistickCard;
