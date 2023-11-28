import React, { useState } from 'react'
import { AiFillLike, AiTwotoneEye } from 'react-icons/ai'
function Card({feUser,featureImg,featureTxt,feLike,feWatch}) {
    const [liked,setliked] = useState(false)
    const [likes,setLikes] = useState(feLike);
    const handleLike  = ()=>{
      increaseLike()
        setliked(pre=>!pre);
    }
  function increaseLike (){
    if(!liked){
        setLikes(pre=>pre+1);
       }else{
         setLikes(pre=>pre-1);
       }
  }
  return (
    <div className='max-w-[20rem] hover:scale-105'>
        <img width={"100%"} className='rounded-md' src={featureImg} alt="pic"/>
         <div className='flex items-start justify-between'>
            <div className='p-[0.3rem]'>
            <p className='font-[600] '>{feUser}</p>
            <p className='text-[0.7rem]'>{featureTxt}</p>
            </div>
          <div className='flex items-center gap-[1rem] p-[0.5rem]' >
              <div className='flex items-center gap-[0.3rem] cursor-pointer'>
                <AiFillLike onClick={handleLike} color={liked && "#0057ff"}/>
                <p className='text-[0.8rem]'>{likes}</p>
              </div>
              <div className='flex items-center gap-[0.2rem]'>
                <AiTwotoneEye/>
                <p className='text-[0.8rem]'>{feWatch}</p>
              </div>
          </div>

         </div>
            </div>
  )
}

export default Card