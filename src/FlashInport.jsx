import React from 'react'

import flash from './flash.json'
import Flashcard from './flashcard'

const FlashInport = () => {
  return (
    <div className='flex flex-row justify-between gap-8 '>
      {flash.map((ele)=>{
        return <Flashcard
            image={ele.image}
            title={ele.title}
        />
      })}
    </div>
  )
}
export default FlashInport
