import Card from './components/Card'
import { cards } from './constants'

import './App.css'

function App() {
  return (
    <>
      {
        cards.map((card) => (
          <Card key={card.id} {...card} />
        ))
      }
    </>
  )
}

export default App
