import React from 'react'
import './Ideas.css'
import IdeaCard from './ideaCard'

const Ideas = ({ideas, deleteIdea}) => {
  const ideaCards = ideas.map(idea => {
    return (
      <div className='ideas-container'>
        <IdeaCard
          title={idea.title}
          description={idea.description}
          id={idea.id}
          key={idea.id}
          deleteIdea={deleteIdea}
        />
      </div>
    )
  })


  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas
