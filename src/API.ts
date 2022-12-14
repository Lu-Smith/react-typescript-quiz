import { shuffleArray } from "./utils";


export type Question = {
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answers: string[]};


export const fetchQuizQuestions = async (amount: number) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=20&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }
    ));
};