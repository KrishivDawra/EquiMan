import React from 'react'
import aid3 from "./Aid3.json"
import Part1 from './part1'
const Part3_imp = () => {
  return (
    <div>
      {aid3.map((ele)=>{
        return <Part1
        law={ele.law}
        description={ele.description}/>
      })}
    </div>
  )
}

export default Part3_imp
