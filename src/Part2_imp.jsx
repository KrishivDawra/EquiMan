import React from 'react'
import aid2 from "./Aid2.json"
import Part1 from './part1'
const Part2_imp = () => {
  return (
    <div>
      {aid2.map((ele)=>{
        return <Part1
        law={ele.law}
        description={ele.description}/>
      })}
    </div>
  )
}

export default Part2_imp
