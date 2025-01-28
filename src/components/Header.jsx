import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="flex justify-between bg-black drop-shadow-2xl px-8 py-3 align-middle">
      <div className='flex pl-4 pt-1'>
        
        <h1 className='py-3 font-serif font-extrabold text-red-400 text-2xl'>EquiMan</h1>
      </div>
            
      <div className=' flex gap-5 px-6 py-4'>        
        <h1 className='text-white font-serif font-extrabold text-xl hover:text-red-400'><Link to={'/'}>Home</Link></h1>
        <h1 className='text-white font-serif font-extrabold text-xl hover:text-red-400'><Link to={'#'}>About</Link></h1>
        <h1 className='text-white font-serif font-extrabold text-xl hover:text-red-400'><Link to={'/legalGPT'}>LegalGPT</Link></h1>
        <h1 className='text-white font-serif font-extrabold text-xl hover:text-red-400' ><Link to={'/blogs'}>Blogs</Link></h1>
        <h1 className='text-white font-serif font-extrabold text-xl hover:text-red-400' ><Link to={'/legalAID'}>LegalAID</Link></h1>
      </div>
      
      <div className='flex gap-2 py-3 justify-center cursor-pointer '>
        <button className='bg-red-300 hover:bg-green-600 px-5 py-2 font-serif  rounded-full font-bold'><Link to={'/connect_us'}> Connect</Link> </button>
      </div>
    </div>


  )
}

export default Header
