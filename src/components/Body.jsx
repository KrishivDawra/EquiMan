import React from 'react'
import Header from './Header'
import FlashInport from '../FlashInport'
import AboutDrop from '../aboutDROP'

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
      
      
      <div className=' flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center px-14 mt-20 gap-10 mb-20 '>

            {/*  */}
          
            <div className='flex flex-col justify-center items-center gap-6 ' id='#'>

              <div className='text-white m-2 font-bold font-serif text-6xl  w-30 rounded-md antialiased tracking-wide  bg-black'  >
                <h1>About Us</h1>
              </div>

              <div>
                <h1 className='text-white text-[25px] font-extrabold font-serif'><pre>Revolutionary, inclusive, and future-focused</pre></h1>
              </div>
            
              <p className='text-white  text-xl font-serif text-justify w-[550px] tracking-wider '>At EQUIMEN, we empower men by addressing mental health stigma, advocating for legal equality, challenging traditional gender roles, and bridging resource gaps. Our mission is to create a supportive community where men can embrace emotional well-being, access tailored resources, and thrive authentically, free from societal biases and outdated expectations.</p>           


              <div className='flex justify-center items-center gap-14 pt-6'>
                <div className='flex justify-center items-center flex-col'>
                  <h1 className='text-white text-2xl font-serif'><pre>1.7 Million+</pre></h1>
                  <h1 className='text-gray-400 font-serif'><pre>Lives Impacted</pre></h1>
                </div>


                <div className='flex justify-center items-center flex-col'>
                  <h1 className='text-white text-2xl font-serif'>5-7 %</h1>
                  <h1 className='text-gray-400 font-serif'><pre>cases increased</pre></h1>
                </div>
              </div>
            </div>

            {/*  */}
              <div className='pt-10'><AboutDrop/></div>

          </div>


          

          

      </div>
      <div>

    <div className='flex justify-between pt-8 pb-20 px-16 bg-slate-700 text-white'>
      

      <div>
        <h1 className='font-bold  text-xl'>Quick Links</h1>
        <div className='flex flex-col'>
          
          
          <a href="#Blockchain">Therapist Directory</a>
          <a href="#Nutrients">Breaking Stigma</a>
          <a href="#Setup">Events & Webinars</a>
          <a href="#Setup">Mentorship Program</a>
        </div>
        

      </div>

      <div>
      <h1 className='font-bold  text-xl'>Contact Us</h1>
        
        
        <p>equimen@gmail.com</p>
        <p>+91-93993-93993</p>
      </div>

      <div>
      <h1 className='font-bold  text-xl'>Our Services</h1>
        <p>Mental Health Support 
        </p>
        <p>Legal Assistance</p>
        <p>Community Forums
        </p>
        <p>Awareness Programs</p>

      </div>
      </div>
 
      </div>
       

      {/* <div className='pt-16'>

        <h1 className='flex justify-center items-center text-white text-5xl font-serif font-bold'>About Us</h1>

        <div className='flex justify-center items-center gap-20 pt-10'>

          <div className='flex flex-col gap-4'>

            <div className='border-2 w-[550px] p-3'>
              <h1 className='text-white text-[23px] font-serif font-bold flex justify-center items-center'>Mission</h1>
              <p className='text-white text-[18px] text-justify'>Empowering men by tackling mental health stigma, legal biases, and societal stereotypes. EQUIMEN provides support, resources, and a judgment-free space for men to seek help and share experiences.</p>
            </div>

            <div className='border-2 w-[550px] p-3'>
              <h2 className='text-white text-[23px] font-serif font-bold flex justify-center items-center'>Vision</h2>
              <p className='text-white text-[18px] text-justify'>The Vision highlights the importance of fostering inclusive gender equality that encompasses the unique struggles faced by men, ensuring that their voices are heard and their issues are addressed</p>
            </div>

          </div>

          <div>
            <AboutDrop/>
          </div>
        </div>
      
      
      </div>
 */}


    </div>

  )
}

export default Body
