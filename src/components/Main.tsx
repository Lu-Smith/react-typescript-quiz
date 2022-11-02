import React from 'react'

const Main = () => {

    const startTrivia = async () => {

    }
  
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  
    }
  
    const nextQuestoin = () => {
  
    }
    
  return (
    <div className='Main'>
    <h1>Quiz</h1>
     <button className='start' onClick={startTrivia}>
      Start
     </button>
     <p className='score'>Score:</p>
     <p className='loading'>Loading questions</p>
    </div>
  )
}

export default Main