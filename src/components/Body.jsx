import React from 'react'
import Header from './Header'
import Flashcard from '../flashcard'
import FlashInport from '../FlashInport'

const Body = () => {
  return (
    <div className='bg-black'>
    <div className=" h-screen bg-[url('./src/assets/bg.jpg')] bg-cover  bg-scroll bg-center shadow-left">
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
      </div>
      <div className='bg-slate-400 h-1 rounded-2xl'>
      
      </div>
    
    <div className='flex justify-center items-center pt-[50px] border-white'>
    <FlashInport/>
    </div>

    <div className='w-full h-1 mt-10 bg-slate-400 rounded-2xl'>
      <p>.</p>

    </div>
    <div className='flex justify-center mt-4'>
        <div className='text-white m-2 font-bold font-serif text-3xl  w-30 rounded-md antialiased tracking-wide  bg-black'  >
        <h1>About Us</h1>
        </div>
        </div>
        <div >
          <div className='container border-2 border-white w-48 flex-row text-white '> 
            <h1>hello</h1>
          </div>
      </div>
    
    
      
     



      

    
    </div>
       
  )
}

export default Body
