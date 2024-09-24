import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

import Card from './components/Card/Card'
import { cards, cardsType } from './constants'

import './App.css'
import CardEdit from './components/CardEdit';

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [toRenderCards, setToRenderCards] = useState<cardsType[]>(cards)
  const [ghostCard, setGhostCard] = useState<cardsType | null>(null)

  const today = new Date().toISOString().split('T')[0]

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)

    if (event.target.value) {
      setGhostCard({
        id: uuidv4(),
        title: event.target.value,
        description: '',
        personAssigned: '',
        startDate: today,
        endDate: today,
      })
    } else {
      setGhostCard(null)
    }
  }

  const handleDelete = (id: string) => {
    setToRenderCards(toRenderCards.filter(card => card.id !== id))
  }

  const handleToggleEdit = (id: string) => {
    const card = toRenderCards.find(card => card.id === id)

    if (!card) return

    setToRenderCards(toRenderCards.map(card => {
      if (card.id === id) {
        return {
          ...card,
          editable: true,
        }
      }

      return card
    })
    )
  }

  const handleEdit = (card: cardsType) => {
    setToRenderCards(toRenderCards.map(c => {
      if (c.id === card.id) {
        return card
      }

      return c
    }))
  }

  const handleSubmit = (card: cardsType) => {
    if (!inputValue) return

    setToRenderCards([
      card!,
      ...toRenderCards,
    ])
    setGhostCard(null)
    setInputValue("")
  }

  return (
    <div className='app'>
      <div className='app__input'>
        Escribe para agregar
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {
          ghostCard && (
            <CardEdit
              {...ghostCard}
              ghost
              handleDelete={() => setGhostCard(null)}
              handleSubmit={handleSubmit}
            />
          )
        }
        {
          toRenderCards.map((card) => (
            card.editable
              ? <CardEdit
                {...card}
                handleDelete={() => setGhostCard(null)}
                handleSubmit={handleEdit}
              />
              : <Card
                handleDelete={handleDelete}
                key={card.id} {...card}
                handleEdit={handleToggleEdit}
              />
          ))
        }
      </div>
    </div>
  )
}

export default App
