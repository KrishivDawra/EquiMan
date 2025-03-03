import React from 'react'

const Flashcard = (props) => {
  return (
    <div style={{ backgroundImage: `url(${props.image})` }} className="h-[400px] w-[270px] bg-cover rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_10px_30px_10px_rgba(251,211,141,0.7)]
 border-white border-2 hover:border-0 hover:border-transparent outline-none">
  <div className="absolute inset-0 bg-gradient-to-t from-slate- to-transparent"></div>
  
  <div className="flex flex-col justify-center items-center pt-64 " >
    <h1 className="text-yellow-500 font-serif font-extrabold text-2xl shadow-yellow-500">{props.title}</h1>
    <button className="text-white font-serif font-extrabold text-xl">Explore</button>
  </div>
</div>

  )
}

export default Flashcard
