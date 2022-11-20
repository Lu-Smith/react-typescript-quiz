import React, {useState} from 'react';
import {fetchQuizQuestions, QuestionState} from '../API';
import QuestionCard from './QuestionCard';
import { Container } from './styles/Main.styles';

export type AnswerObject = {
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
      if (!gameOver) {
        const answer = e.currentTarget.value;
        const correct = questions[number].correct_answer === answer;
        if (correct) setScore(prev => prev + 1);
        const answerObject = {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer,
        };
        setUserAnswers(prev => [...prev, answerObject])

      }
    };
  
    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === Total_Questions) {
          setGameOver(true);
        } else {
          setNumber(nextQuestion);
        }
    };

  return (
    <Container>
    <h1>Quiz</h1>
    {gameOver || userAnswers.length === Total_Questions ? (
        <button className='start' onClick={startTrivia}>
         Start
        </button>
    ): null}
    {!gameOver ? <p className='score'>Score: {score}</p> : null}
    {loading && <p className='loading'>Loading questions...</p>}
    {!loading && !gameOver && (
         <QuestionCard 
         questionNumber={number + 1}
         totalQuestions={Total_Questions} 
         question={questions[number].question}
         answers={questions[number].answers}
         userAnswer={userAnswers ? userAnswers[number] : undefined}
         callback={checkAnswer}/> 
    )}
    {!gameOver && 
     !loading && 
     userAnswers.length === number + 1 && 
     number !== Total_Questions -1 ? (
      <button className='next' onClick={nextQuestion}>Next question</button>
    ) : null}
    </Container>
  )
}

export default Main;