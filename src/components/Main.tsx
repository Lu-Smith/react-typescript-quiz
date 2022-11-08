import React, {useState} from 'react';
import QuestionCard from './QuestionCard';

const Total_Questions = 10;

const Main = () => {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

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
     {/* <QuestionCard 
     questionNumber={number + 1}
     totalQuestions={Total_Questions} 
     question={questions[number].question}
     answers={questions[number].answers}
     userAnswer={userAnswers ? userAnswers[number] : undefined}
     callback={checkAnswer}/> */}
     <button className='next' onClick={nextQuestoin}>Next question</button>
    </div>
  )
}

export default Main