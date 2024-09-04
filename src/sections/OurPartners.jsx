import React from "react";

function OurPartners() {
  return (
    <section>
      <div className=" container-wrapper">

        <div className=" py-3">
        <h1
          
            className=" text-center text-3xl sm:text-5xl font-manbold font-bold py-2"
          >
            Our Team
          </h1>
        </div>
        <div className=" flex justify-between items-center gap-4">
          <div className=" nft p-4 border border-[#bebebe] text-center">
            <img src="images/sara.png" alt="" />

            <p>Sara</p>

            <p>Business Development Manage</p>
          </div>

          <div className=" nft p-4 border border-[#bebebe] text-center ">
            <img src="images/david.png" alt="" />

            <p>Ashish</p>

            <p>Marketing Head</p>
          </div>

          <div className=" nft p-4 border border-[#bebebe] text-center">
            <img src="images/gur.png" alt="" />
            <p>Gurpreet</p>

<p> Co-Founder</p>
         
          </div>

          <div className=" nft p-4 border border-[#bebebe] text-center">
            <img src="images/noor2.png" alt="" />

            <p>Ritesh</p>

<p>Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
