import React from 'react'
import CreativeField from '../selectFields/CreativeField'
import { SiAdobecreativecloud } from 'react-icons/si';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function SelectFields({tags,tagsIcon}) {
  return (
    <div className='flex items-center gap-[0.5rem] border-[1px] p-2 rounded-md'>
       {tagsIcon}
       <p className='font-[600] text-[0.9rem]'>{tags}</p>
<ArrowDropDownIcon sx={{fontSize:"1rem"}}/>
       
    </div>
  )
}

export default SelectFields