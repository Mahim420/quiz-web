import React from "react";
import Ans from "./Ans";

const Ques = ({ quiz }) => {
  const { question,options } = quiz;
  console.log(quiz);
  return (
    <div className="border-2 flex justify-center border-red-700 mt-4">
      <article className="">
        <h1 className="text-center">{question}?</h1>
        <div className="grid grid-cols-2">
            {
                options.map(ans => <Ans ans={ans}></Ans>)
            }
        </div>
      </article>
    </div>
  );
};

export default Ques;
