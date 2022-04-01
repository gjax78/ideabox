import React from 'react'
import './ideaCard.css'

const IdeaCard = ({ title, url, id, deleteIdea }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <img src={url} />
      <button onClick={() => deleteIdea(id)}>Trash</button>
    </div>
  )
}

export default IdeaCard
