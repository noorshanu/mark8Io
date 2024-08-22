import React from 'react'

function Cta() {
  return (
   <section className=' py-8'>
    <div className=' container-wrapper py-12 px-6 bg-[#1a1a1a] border border-prime rounded-2xl'>

        <div className=' flex flex-col justify-center gap-2 items-center'>

                <h1 className=' text-3xl sm:text-5xl font-manbold font-bold text-center py-1'>
                <span className=' text-prime '>Tell us your marketing challenge</span>, and 
                we'll  
                </h1>

                <h1 className= 'text-3xl sm:text-5xl font-manbold font-bold text-center'>
                prepare a customized solution for you.
                </h1>

                <p className=' py-6 text-center max-w-3xl'>
                Select Coinband as your WEB3 digital marketing partner to chart a path for your company's growth in the blockchain, cryptocurrency, and NFT sectors. Click the "Get a proposal" button to get started.
                </p>



                <a href="/" className='border-prime border-2  px-4 py-1  rounded-2xl text-xl font-manbold mt-4'>
            Contact Us
            </a>

        </div>

    </div>
   </section>
  )
}

export default Cta