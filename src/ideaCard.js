import React from 'react'
import './ideaCard.css'

const IdeaCard = ({ title, description, id, deleteIdea }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <button onClick={() => deleteIdea(id)}>Trash</button>
    </div>
  )
}

export default IdeaCard
