import React from "react";
import { useLoaderData } from "react-router-dom";
import Ques from "./Ques";

const Quiz = () => {
  const allQuiz = useLoaderData();
  const questions = allQuiz.data.questions;

  
  return (
     <div>
      <h1 className="text-3xl text-sky-500 font-bold text-center mt-6">
            Quiz Page
          </h1>
       <div className="flex justify-center">
        <div>
          {questions.map((quiz) => (
            <Ques key={quiz.id} quiz={quiz}></Ques>
          ))}
        </div>
      </div>
     </div>
  );
};

export default Quiz;
