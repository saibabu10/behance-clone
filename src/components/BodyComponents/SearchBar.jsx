import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchTypeCard from './SearchTypeCard';
import { searchType } from '../data/data';

function SearchBar() {
    const [focused,setFocused] = useState(false);
    const handleSearchFocus=()=>{
        setFocused(pre=>!pre);
    }
    const recentSearch =["Technoloy","Luna"];
  return (
    <div className={`border-[#d3d3d3] border-[1px]  m-[1rem] mt-[1.5rem] rounded-full  flex items-center justify-between ${focused && "rounded-bl-lg bg-white"}`}>
      <div className={`flex items-center gap-[0.7rem] w-[50%] py-[0.5rem] px-[1rem]  ${focused ? "rounded-bl-lg shadow-2xl  bg-white" : "bg-[#f9f9f9]"} rounded-full  rounded-r-none border-r-[1px] border-[#CCC] relative`}>
       <i className="fa fa-search text-[#696969] text-[1.5rem] font-[600]"  aria-hidden="true"></i>
        <input  placeholder='Search the creative world at work' className={`${focused && "bg-white"} text-[1.5rem] w-[100%] outline-none placeholder:text-[#696969] placeholder:font-[600] bg-[#f9f9f9]  font-[600]`} onFocus={handleSearchFocus} onBlur={handleSearchFocus}/>
     
 
    {focused && <div className='w-[100%]   absolute bg-white top-[100%] left-0 right-[-1] rounded-b-lg shadow-2xl'>
        <div className='px-[3rem] py-[1rem]'>

          <p className='text-[0.8rem] font-[600] text-[#696969]'>RECENT SEARCHES</p>
          <div className='mt-[0.7rem]'>
              {
                recentSearch.map(data=>{
                    return <div className='flex items-center justify-between p-[0.3rem]'>
                        <p className='font-[600] text-[1.5rem]'>{data}</p>
                        <CloseIcon sx={{cursor:"pointer"}}/>
                    </div>
                })
              }
            </div>
            </div>
            <hr/>
            <div className='px-[3rem] py-[1rem]'>
            <p className='text-[0.8rem] font-[600] text-[#696969]'>SORT & FILTER ALL</p>
             <div>
                <div className='flex flex-wrap gap-[0.6rem] mt-[1rem]'>
               {
                searchType.map(data=>{
                    return <SearchTypeCard {...data}/>
                })
               }
                </div>
           
            </div>
    </div>
       </div>
}

       </div>
  
       <div  className='flex items-center justify-evenly w-[50%]'>
        <p className='text-white bg-black px-[1rem] rounded-full py-[0.3rem] text-[0.9rem] font-[500] cursor-pointer'>Projects</p>
        <p className='px-[1rem] rounded-full py-[0.3rem] text-[0.9rem] font-[500] cursor-pointer hover:bg-[#efebeb]'>Assets</p>
        <p className='px-[1rem] rounded-full py-[0.3rem] text-[0.9rem] font-[500] cursor-pointer hover:bg-[#efebeb]'>Images</p>
        <p className='px-[1rem] rounded-full py-[0.3rem] text-[0.9rem] font-[500] cursor-pointer hover:bg-[#efebeb]'>Prototypes</p>
        <p className='px-[1rem] rounded-full py-[0.3rem] text-[0.9rem] font-[500] cursor-pointer hover:bg-[#efebeb]'>Streams</p>
        <p className='px-[1rem] rounded-full py-[0.3rem] text-[0.9rem] font-[500] cursor-pointer hover:bg-[#efebeb]'>People</p>
        <p className='px-[1rem] rounded-full py-[0.3rem] text-[0.9rem] font-[500] cursor-pointer hover:bg-[#efebeb]'>Moodboards</p>
       </div>
      
    </div>
  )
}

export default SearchBar