import React from "react";
import img from "../../images/quiz.jpg";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Home = () => {
    const allData = useLoaderData();
      const topics = allData.data;

  return (
   <div>
     <section className="flex justify-center mt-20">
      <section className="flex justify-evenly m-9 p-6 w-4/5 items-center">
        <div>
          <img className="w-4/5 rounded-3xl" src={img} alt="" />
        </div>
        <div className="w-2/4">
          <h1 className="text-5xl">
            <span className="font-extrabold text-red-500">Start Your Quiz</span>{" "}
            <br />
            <span className="font-bold">Here</span>
          </h1>
        </div>
      </section>
    </section>
    <section className="flex justify-center">
       {
        topics.map(topic => <Cart
        topic={topic}
        key={topic.id}
        ></Cart>)
       }
    </section>
   </div>
  );
};

export default Home;
