import { FC, useState } from "react";

import { cardsType } from "../../constants";

import trashIcon from "../../assets/trash.svg"
import saveIcon from "../../assets/save-icon.svg"

import "./index.scss";

const CardEdit: FC<cardsType & { ghost?: boolean, handleDelete?: (id: string) => void, handleSubmit?: (card: cardsType) => void }> = ({
  id,
  title,
  description: descriptionProp,
  personAssigned: personAssignedProp,
  startDate: startDateProp,
  endDate: endDateProp,
  ghost,
  handleDelete,
  handleSubmit,
}) => {
  const [description, setDescription] = useState<string>(descriptionProp)
  const [personAssigned, setPersonAssigned] = useState<string>(personAssignedProp)
  const [startDate, setStartDate] = useState<string>(startDateProp)
  const [endDate, setEndDate] = useState<string>(endDateProp)

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const handlePersonAssignedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonAssigned(event.target.value)
  }

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value)
  }

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value)
  }

  return (
    <div className={`card ${ghost ? 'ghost' : ''}`}>
      <h2 className="card__title">{title}</h2>
      <p className="card__description"><textarea onChange={handleDescriptionChange} value={description} /></p>
      <input type="text" value={personAssigned} onChange={handlePersonAssignedChange} />
      <div className="card__dates">
        <div className="card__dates--container">
          <span>Fecha de inicio:</span>
          <input type="date" value={startDate} onChange={handleStartDateChange} />
        </div>
        <div className="card__dates--container">
          <span>Fecha de fin:</span>
          <input type="date" value={endDate} onChange={handleEndDateChange} />
        </div>
      </div>
      {
        !ghost && (
          <button onClick={() => handleDelete?.(id)} className="card__delete">
            <img src={trashIcon} className="card__delete--icon" alt="Eliminar" />
          </button>
        )
      }

      <button onClick={() => handleSubmit?.({
        id,
        title,
        description,
        personAssigned,
        startDate,
        endDate,
      })} className="card__edit">
        <img src={saveIcon} className="card__edit--icon" alt="Editar" />
      </button>

    </div>
  );
}

export default CardEdit;
