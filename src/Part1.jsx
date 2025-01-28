import React from 'react'

const Part1 = (props) => {
  return (
    <div className='border-t-2 border-b-2 border-r-2 border-l-2 w-92 h-32 '>
      <h1 className='text-white text-[18px] font-serif font-semibold'>{props.law}</h1>
      <p className='text-white font-serif'>{props.description}</p>
    </div>
  )
}

export default Part1
