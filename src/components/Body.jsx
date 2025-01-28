import React from 'react'
import Header from './Header'
import FlashInport from '../FlashInport'

const Body = () => {
  return (
    <div className='bg-black'>
      <div className=" h-screen bg-[url('./src/assets/bg.jpg')] bg-cover  bg-scroll bg-center shadow-left">
        <Header />
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
      <div className='h-screen '>
        <div className='bg-slate-400 h-1 rounded-2xl'>

        </div>
        <h1 className='text-white text-5xl font-serif flex justify-center items-center pt-12 '><u>Your Help Desk!</u></h1>
        <div className='flex justify-center items-center pt-[50px] '>
          <FlashInport />
        </div>
      </div>
        <div className='w-full h-1 mt-10 bg-slate-400 rounded-2xl'>
          <p>.</p>

        </div>
      
      <div className='flex justify-center items-center px-14 mt-24 gap-x-24 pb-24'>

        <div className='flex justify-left items-left flex-col'>
          <h1 className='text-white text-2xl'><pre>1.7 Million+</pre></h1>
          <h1 className='text-gray-400'><pre>Lives Positively Impacted</pre></h1>
        </div>
      
        <div className='flex flex-col justify-center items-center gap-8'>
          <div className='text-white m-2 font-bold font-serif text-5xl  w-30 rounded-md antialiased tracking-wide  bg-black'  >
            <h1>About Us</h1>
          </div>

          <div >
            <h1 className='text-white text-[25px] font-extrabold font-serif'><pre>Revolutionary, inclusive, and future-focused</pre></h1>
          </div>
          

          <p className='text-white  text-xl font-serif text-center tracking-wider '>At EQUIMEN, we empower men by addressing mental health stigma, advocating for legal equality, challenging traditional gender roles, and bridging resource gaps. Our mission is to create a supportive community where men can embrace emotional well-being, access tailored resources, and thrive authentically, free from societal biases and outdated expectations.</p>

          <div className='pt-4'>
            <button className=' px-8 py-3 bg-white rounded-3xl'>Read more</button>
          </div>
        
        
        </div>

        <div className='flex justify-left items-left flex-col'>
          <h1 className='text-white text-2xl'>5-7 %</h1>
          <h1 className='text-gray-400'><pre>cases increased</pre></h1>
        </div>


      </div>
      <div >
        


      </div>



    </div>

  )
}

export default Body
