import React from 'react'
import { useState } from 'react'
import '../categoriesbar/categories.scss'

const barItems = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]
export default function Categoriesbar() {

  const [activeElement,setactiveElement]=useState('All')
  const handelBar=(values)=>{
   return setactiveElement(values)
  }
  return (
    <div className='categoriesBar'>
      {
        barItems.map((values, item) => {
         return <span 
         key={item}
         onClick={()=>handelBar(values)}
         className={activeElement===values ?'active':''}>
          {values}
          </span>
        })
      }
    </div>
  )
}
