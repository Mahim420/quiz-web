import Ans from "./Ans";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./test.css";
import { useState } from "react";

const Ques = ({ quiz }) => {
  const { question, options, correctAnswer, id } = quiz;

  const [ans, setAns] = useState(true);
  const answer = correctAnswer;

  const display = (id) => {
    setAns(!ans);
  };

  const cheakQuiz = (option) => {
    if (option !== correctAnswer) {
      toast.error("Un-correct", {
        position: "top-center",
      });
    } else {
      toast.success("Correct", {
        position: "top-center",
      });
    }
  };

  return (
    <section className="flex justify-center">
      <div className="flex w-2/4 p-4 rounded m-5 shadow-md justify-center mt-6">
        <article>
          <div>
            <h1 className="text-center text-xl font-semibold text-sky-600">
              Quiz-${question}?
              <i onClick={display} className="fa-solid fa-eye ml-7"></i>;
            </h1>
          </div>
          <div className="grid grid-cols-2">
            {options.map((ans) => (
              <Ans ans={ans} btn={cheakQuiz}></Ans>
            ))}
            <ToastContainer />
          </div>
          <h3 className={`${ans ? "display" : undefined} mt-3`}>
            Correct Answer :{answer}
          </h3>
        </article>
      </div>
    </section>
  );
};

export default Ques;
