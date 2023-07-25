import React from 'react';

const Cart = ({topic}) => {
    console.log(topic);
    const {name, total,logo} = topic
    return (
        <div>
            <article className='ml-6 p-4 border border-6'>
                <div>
                    <img className='w-60' src={logo} alt="" />
                </div>
                <div className='flex justify-between mt-3'>
                    <p>{name}</p>
                    <button className='bg-blue-400 p-2 text-white font-semibold rounded'>Start Particle
                    <i className="fa-solid fa-arrow-right ml-2 text-white"></i>
                    </button>
                </div>
            </article>
        </div>
    );
};

export default Cart;