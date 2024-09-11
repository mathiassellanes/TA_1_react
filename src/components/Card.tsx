import { FC } from "react";

import { cardsType } from "../constants";

import "./index.css";

const Card: FC<cardsType> = ({ title, description, personAssigned, startDate, endDate }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
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
