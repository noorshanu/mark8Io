import React from 'react'

function Hero() {
  return (
    <section className=' mt-6'>
        
        <div className=' container-wrapper'>

       <div className=' flex justify-between items-center'>
       <div className=' w-full sm:w-1/2' data-aos="zoom-in-right"
          data-aos-duration="1500">
            <h1 className=' text-7xl font-manbold txt-g'>
            Elevate Your <br />
            Web3 Presence
            </h1>

            <p className=' py-4 text-2xl'>
            Mark8 is a marketing agency with first-class customer experience and advanced growth marketing tools, which will make your project noticeable and attractive to the Web3 community.
            </p>

            <a href="/" className='border-prime border-2  px-4 py-1  rounded-xl text-xl font-manbold'>
            Contact Us
            </a>

            </div>

            <div className=' w-full sm:w-1/2' data-aos="zoom-in-left"
          data-aos-duration="1500">

            <img src="images/hero.webp" alt="" className=' mx-auto h-[450px] img-hov' />

            </div>

       </div>

        </div>
    </section>
  )
}

export default Hero