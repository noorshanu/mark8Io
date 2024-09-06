import React from 'react'
import Marquee from 'react-fast-marquee'

function Partners() {
  return (
    <section>
        <div>
        <h1
            
            className=" text-center text-3xl sm:text-xl font-manbold font-bold py-4"
          >
            Our Partners
          </h1>
        </div>

        <div className='flex justify-center items-center gap-4  '>
         <Marquee direction='right'>

         <img src="images/flox.png" alt="" className=' mx-auto px-3' />
            <img src="images/ordy.svg" alt="" className=' mx-auto px-3' />
            <img src="images/strike.png" alt="" className=' mx-auto px-3' />
            <img src="images/thol.webp" alt="" className=' mx-auto  px-3 h-[30px]' />
            <img src="images/gain.svg" alt="" className=' mx-auto px-3 ' />
            <img src="https://plots.ethxy.com/images/logo.png" alt=""  className=' mx-auto h-[40px] px-3'/>
            <img src="images/xrp.png" alt="" className=' mx-auto invert px-3  h-[40px]' />
            <img src="images/play.svg" alt="" className=' mx-auto  px-3  h-[40px]' />
            <img src="images/ben.webp" alt="" className=' mx-auto  px-3  h-[40px]' />
            <img src="images/strike.png" alt="" className=' mx-auto px-3' />
            <img src="images/thol.webp" alt="" className=' mx-auto  px-3 h-[30px]' />

            <img src="https://plots.ethxy.com/images/logo.png" alt=""  className=' mx-auto h-[40px] px-3'/>
            <img src="images/xrp.png" alt="" className=' mx-auto invert px-3  h-[40px]' />
            <img src="images/play.svg" alt="" className=' mx-auto  px-3  h-[40px]' />

 


         </Marquee>





        </div>
    </section>
  )
}

export default Partners