import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="flex justify-between bg-black drop-shadow-2xl px-8 py-3 align-middle">
      <div className='flex pl-4 pt-1'>
        
        <h1 className='py-3 font-serif text-red-300 text-2xl'>EquiMan</h1>
      </div>
            
      <div className=' flex gap-5 px-6 py-4'>        
        <h1 className='text-white text-xl hover:text-green-600'><Link to={'/'}>Home</Link></h1>
        <h1 className='text-white text-xl hover:text-green-600'><Link to={'/about'}>About Us</Link></h1>
        <h1 className='text-white text-xl hover:text-green-600'><Link to={'/services'}>Services</Link></h1>
        <h1 className='text-white text-xl hover:text-green-600' ><Link to={'/product'}></Link></h1>
      </div>
      
      <div className='flex gap-2 py-3 justify-center cursor-pointer '>
        <button className='bg-red-300 hover:bg-green-600 px-5 py-2 rounded-full'>Join Us</button>
      </div>
    </div>


  )
}

export default Header
