import React, { useState } from 'react';

function Likes() {
   const [likes, setLikes] = useState(0);
   const [Dislike, setDislike] = useState(0);
   return (
    <div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
           <div className='flex flex-col sm:flex-row items-start  w-full'>

             <button className='bg-[#fbfdfc] text-black rounded-lg hover:scale-105 duration-300 font-medium w-[100px] ml-2 my-4 px-4 py-3' onClick={() => {
        setLikes(likes + 1);
            }}>{likes} 👍</button>

            <button className='bg-[#f7f7f7] text-black  rounded-lg hover:scale-105 duration-300 font-medium w-[100px] ml-2 my-4 px-4  py-3' onClick={() => {
        setDislike(Dislike + 1);
            }}>{Dislike} 👎</button>
        </div>
 </div>
</div>

   );
}
export default Likes;