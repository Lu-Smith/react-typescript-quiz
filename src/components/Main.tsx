import React, {useState} from 'react';
import {fetchQuizQuestions, QuestionState} from '../API';
import QuestionCard from './QuestionCard';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Total_Questions = 10;

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);



    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(Total_Questions);

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    console.log(questions);
  
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  
    };
  
    const nextQuestion = () => {
  
    };

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
     <button className='next' onClick={nextQuestion}>Next question</button>
    </div>
  )
}

export default Main;