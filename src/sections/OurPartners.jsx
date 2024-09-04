import React from "react";

function OurPartners() {
  return (
    <section>
      <div className=" container-wrapper">
        <div className=" py-3">
          <h1 className=" text-center text-3xl sm:text-5xl font-manbold font-bold py-2">
            Our Team
          </h1>
        </div>
        <div className=" flex flex-col sm:flex-row justify-center  items-center gap-4">
          <div className="  nft p-4 border border-[#bebebe] text-center h-full">
            <img src="images/sara.png" alt="" />

            <p>Sarah </p>

            <p className=" text-xs">Business Development Manager</p>
          </div>

          <div className="  nft p-4 border border-[#bebebe] text-center h-full ">
            <img src="images/david.png" alt="" />

            <p>Ashish</p>

            <p>Marketing manager</p>
          </div>

          <div className="  nft p-4 border border-[#bebebe] text-center h-full">
            <img src="images/gur.png" alt="" />
            <p>Gurpreet</p>

            <p> Co-Founder</p>
          </div>

          <div className="  nft p-4 border border-[#bebebe] text-center h-full">
            <img src="images/noor2.png" alt="" />

            <p>Ronnie</p>

            <p>Founder</p>
          </div>

          <div className="  nft p-4 border border-[#bebebe] text-center h-full">
            <img src="images/david2.png" alt="" />

            <p>David </p>

            <p> Partnership Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
