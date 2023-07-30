import React from 'react';

const Ans = ({ans,btn}) => {
    return (
        <div onClick={()=> btn(ans)} className='border ml-3 mt-3 border-3 hover:bg-slate-400 cursor-pointer p-3 rounded border-blue-600'>
           <p>{ans}</p>
        </div>
    );
};

export default Ans;