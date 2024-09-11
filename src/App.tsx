import { useState } from 'react'

import Card from './components/Card'
import { cards, cardsType } from './constants'

import './App.css'

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [toRenderCards, setToRenderCards] = useState(cards)
  const [ghostCard, setGhostCard] = useState<cardsType | null>(null)

  const today = new Date().toISOString().split('T')[0]

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)

    if (event.target.value) {
      setGhostCard({
        id: toRenderCards.length + 1,
        title: event.target.value,
        description: `Descripción para ${event.target.value}`,
        personAssigned: "Vos",
        startDate: today,
        endDate: today,
      })
    } else {
      setGhostCard(null)
    }
  }

  const handleSubmit = () => {
    if (!inputValue) return

    setToRenderCards([
      ghostCard!,
      ...toRenderCards,
    ])
    setGhostCard(null)
    setInputValue("")
  }

  return (
    <div className='app'>
      <div className='app__input'>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSubmit}
        >
          Añadir Tarjeta
        </button>
      </div>
      <div>
        {
          ghostCard && (
            <Card
              key={ghostCard.id}
              ghost
              {...ghostCard}
            />
          )
        }
        {
          toRenderCards.map((card) => (
            <Card key={card.id} {...card} />
          ))
        }
      </div>
    </div>
  )
}

export default App
