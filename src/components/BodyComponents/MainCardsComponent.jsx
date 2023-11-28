import React from 'react'
import Card from './CardsComponent'
import { behanceItem } from '../data/data'

function MainCards() {
  return (
    <div className='flex flex-wrap gap-[2rem] p-[1.5rem]'>
        {
            behanceItem.map((data,i)=>{
                return <Card {...data} key={i}/>
            })
        }
    </div>
  )
}

export default MainCards