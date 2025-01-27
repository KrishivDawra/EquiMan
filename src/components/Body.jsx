import React from 'react'
import Header from './Header'

const Body = () => {
  return (
    <div className="h-screen bg-[url('./src/assets/bg.jpg')] bg-cover  bg-scroll bg-center shadow-left">
      <Header/>
      <div className="absolute inset-0 gap-8 bg-black/35 pointer-events-none flex flex-col justify-center items-center">
        <div className='flex flex-col pt-30 font-serif justify-center items-center gap-1 '>
          <h1 className='text-white font-extrabold text-[55px] '>Empowering Voices, Enabling Equality–</h1>
          <h1 className='text-white font-extrabold text-[50px] shadow-text-black-xl'> BECAUSE MEN MATTER TOO</h1>

        </div>

        <div className='pt-8'>
          <button className='text-black px-8 py-3 font-serif rounded-2xl flex justify-center items-center bg-white'>Join Us!</button>
        </div>



        
      </div>

      <div className='pt-[600px] flex justify-center items-cente'>
          <p className='text-black'>krishiv</p>
        </div>
      
     



      

      
    </div>
       
  )
}

export default Body
