import React from 'react'
import aid from "./Aid.json"
import Part1 from './part1'

const Part1_Imp = () => {
  return (
    <div className=''>
      {aid.map((ele)=>{
        return <Part1
        law={ele.law}
        description={ele.description}/>
      })}
    </div>
  )
}

export default Part1_Imp
