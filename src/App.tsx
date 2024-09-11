import Card from './components/Card'
import { cards } from './constants'

import './App.css'

function App() {
  return (
    <>
      {
        cards.map(({
          id,
          title,
          description,
          personAssigned,
          startDate,
          endDate
        }) => (
          <Card key={id}>
            <>
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
            </>
          </Card>
        ))
      }
    </>
  )
}

export default App
