import React from 'react';
import {AnswerObject} from './Main';
import {Container } from './styles/Footer.styles';
import {Number, Answer} from './styles/QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => {
  return (
    <Container>
        <Number>
            Question: {questionNumber} / {totalQuestions}
        </Number>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <Answer>
             {answers.map(answer => (
                <div key={answer}>
                   <button disabled={userAnswer ? true : false} value ={answer} onClick={callback}>
                     <span dangerouslySetInnerHTML={{__html: answer}} /> 
                   </button> 
                </div>
             ))}
        </Answer>


    </Container>
  )
}

export default QuestionCard