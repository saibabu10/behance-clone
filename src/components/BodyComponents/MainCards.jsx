import React from 'react'
import Card from './Cards'
import { behanceItem } from '../data/data'

function MainCards() {
  return (
    <div className='flex flex-wrap gap-[2rem] p-[1.5rem]'>
        {
            behanceItem.map(data=>{
                return <Card {...data}/>
            })
        }
    </div>
  )
}

export default MainCards