import { FC } from "react";

import { cardsType } from "../../constants";

import trashIcon from "../../assets/trash.svg"
import editIcon from "../../assets/edit.svg"

import "./index.scss";

const Card: FC<cardsType & { ghost?: boolean, handleDelete?: (id: string) => void, handleEdit?: (id: string) => void}> = ({
  id,
  title,
  description,
  personAssigned,
  startDate,
  endDate,
  ghost,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className={`card ${ghost ? 'ghost' : ''}`}>
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
      {
        !ghost && (
          <button onClick={() => handleDelete?.(id)} className="card__delete">
            <img src={trashIcon} className="card__delete--icon" alt="Eliminar" />
          </button>
        )
      }

      {
        !ghost && (
          <button onClick={() => handleEdit?.(id)} className="card__edit">
            <img src={editIcon} className="card__edit--icon" alt="Editar" />
          </button>
        )
      }
    </div>
  );
}

export default Card;
