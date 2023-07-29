import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ topic }) => {
  const { name, total, logo,id } = topic;
  return (
    <div>
      <article className="ml-6 p-4 border border-6">
        <div>
          <img className="w-60" src={logo} alt="" />
        </div>
        <div className="flex justify-between mt-3">
          <p>{name}</p>
          <Link to={`/${id}`}>
            <button className="bg-blue-400 p-2 text-white font-semibold rounded">
              Start Particle
              <i className="fa-solid fa-arrow-right ml-2 text-white"></i>
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Cart;
