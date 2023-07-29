import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from './Ques';

const Quiz = () => {
    const allQuiz = useLoaderData();
    const questions = allQuiz.data.questions;
    return (
        <div>
            <h1>Quiz Page</h1>
            <div>
            {
                questions.map(quiz => <Ques
                key={quiz.id}
                quiz = {quiz}
                ></Ques>)
            }
            </div>
        </div>
    );
};

export default Quiz;