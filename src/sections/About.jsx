import React from 'react'

function About() {
  return (
  <section className=' py-8 relative'>

    <div className='css-we3'>

    </div>
    <div className=' container-wrapper'>

        <div className=' flex justify-between items-center'>

            <div className=' w-full sm:w-1/2'>
                <img src="assets/asset 26.svg" alt="" className='  h-[450px] shadow-md' />
            </div>

            <div className=' w-full sm:w-1/2'>
                <h2 className=' text-6xl font-manbold pb-4'>
                Unlock Revenue Growth 
                 for Your <span className=' text-prime'>
                 Business
                 </span>
                </h2>

                <p className=' text-lg'>
                At Mark8, we revolutionize your marketing strategy with first-class customer experience and cutting-edge tools. Our expertise in the web3 community ensures your product stands out and captures the attention it deserves.
                </p>

                <p className=' text-lg my-8'>

                Partner with us and watch your brand thrive in the digital frontier.
                </p>

                <a href="/"> Get Started</a>
            </div>

        </div>

    </div>
  </section>
  )
}

export default About