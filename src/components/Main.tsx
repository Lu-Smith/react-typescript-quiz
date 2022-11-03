import React, {useState} from 'react';
import QuestionCard from './QuestionCard';



const Main = () => {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

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
     <p className='loading'>Loading questions...</p>
     <QuestionCard />
     <button className='next' onClick={nextQuestoin}>Next question</button>
    </div>
  )
}

export default Main