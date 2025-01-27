import React from 'react'
import Header from './components/Header'
const About = () => {
  return (

    <div className='bg-white'>
      <div >
        <Header/>
      </div>
      <div className='flex justify-center'>
        <div className='text-white m-2 font-bold font-serif text-3xl  w-30 rounded-md  bg-black'  >
        <h1>About us</h1>
        </div>
      </div>
    </div>
  )
}

export default About
