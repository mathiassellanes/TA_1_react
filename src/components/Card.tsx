import { FC } from "react";

import { cardsType } from "../constants";

import "./index.css";

const Card: FC<cardsType & { ghost?: boolean }> = ({ title, description, personAssigned, startDate, endDate, ghost }) => {
  return (
    <div className={`card ${ghost ? 'ghost': ''}`}>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <p>{personAssigned}</p>
      <div className="card__dates">
        <div className="card__dates--container">
          <span>Fecha de inicio:</span>
          <p>{startDate}</p>
        </div>
        <div className="card__dates--container">
          <span>Fecha de fin:</span>
          <p>{endDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
