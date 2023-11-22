import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function SearchTypeCard({sItems,icons}) {
  return (
    <div className='flex items-center border-[1px] p-[0.5rem] gap-[1rem] rounded-md'>
{icons}
<p className='font-[600]'>{sItems}</p>
<KeyboardArrowRightIcon sx={{color:"gray"}}/>
    </div>
  )
}

export default SearchTypeCard