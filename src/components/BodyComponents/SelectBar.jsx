import React, { useState } from 'react'
import SelectFields from './SelectField'
import { tagName } from '../data/data'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function SelectBav() {
    const [open,setOpen] = useState(false);
    const [curdata,setCurrentData] = useState("Recommended");
    const handleRecommended = ()=>{
        setOpen(pre=>!pre)
    }


    const selectVal = [
        "Recommended",
        "Curated",
        "Most Appreciated",
        "Most Viewed",
        "Most Discussed",
        "Most Recent"
    ]
    const handleSelect = (data)=>{
         setCurrentData(data)
         handleRecommended()
    }
  return (
    <div className=' px-[1.5rem] mt-[1.5rem] flex items-center justify-between'>
    <div className='flex gap-[1rem]'>
        {tagName.map(data=><SelectFields {...data}/>)}
       
    </div>
    <div className='relative'>
       <div className={`text-[0.8rem]  ${open ? "text-[#0057ff]" : "text-[#696969]"} `}>
        sort
       </div>
       <div className='flex items-center cursor-pointer'>
        <p className={`${open ? "text-[#0057ff]" : "text-[#000000]"} text-[0.9rem]`} onClick={handleRecommended}>
        {curdata}
        </p>
        <div onClick={handleRecommended}>
        <ArrowDropDownIcon sx={open && {color:"#0057ff"} } className={`${open && "rotate-180 transition-all ease-in-out delay-150"}`}/>
        </div>
     
       
       </div>
      {open && <div className='w-[9rem] h-[15rem] bg-white absolute px-[0.5rem] py-[1rem] flex flex-col  right-[0.1rem] top-[3rem] rounded-md shadow-md'>
      <div>

      {
        selectVal.map(data=>{
            return <p className='p-[0.2rem] cursor-pointer' onClick={()=>handleSelect(data)}>{data}</p>
        })
      }
      </div>
</div> 
}
    </div>
   
    </div>
  )
}

export default SelectBav