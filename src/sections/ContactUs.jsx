import { IoCheckmarkSharp } from "react-icons/io5";

function ContactUs() {
  return (
    <section className=" w-full" id="contact">
      <div className=" container-wrapper">
        <div className=" flex justify-between flex-col sm:flex-row  items-center ">
          <div className=" w-full sm:w-1/2 ">
            <h1 className=" font-inter font-bold text-4xl mb-4">
              Ready to take your marketing to the next level?
            </h1>

            <p className=" py-3 text-base">
              Book a demo and discovery call to get a look at:
            </p>

            <div>
              <p className=" py-2 flex items-center gap-2">
                <IoCheckmarkSharp className=" text-prime text-xl" />
                How Mark8.io works
              </p>

              <p className=" py-2 flex items-center gap-2">
                <IoCheckmarkSharp className=" text-prime text-xl" />
                How you can do marketing at scale better, faster and cheaper
              </p>

              <p className=" py-2 flex items-center gap-2">
                <IoCheckmarkSharp className=" text-prime text-xl" />
                How we’re different from agencies, freelancers and in-house
                marketing teams (hint: we’re 15x faster than hiring!)
              </p>

              <p className=" py-2 flex items-center gap-2">
                <IoCheckmarkSharp className=" text-prime text-xl" />
                The most suitable subscription plan for your needs
              </p>
            </div>

            <div className=" grid grid-cols-2 sm:grid-cols-3 items-center gap-4 mt-4 h-0 sm:h-16">

              {/* <img src="images/logi.svg" alt="" className="w-[120px] h-[30px]" />
              <img src="images/bitcoin.png" alt="" className="w-[120px] h-[30px]" />
              <img src="images/strip.svg" alt="" className="w-[120px] h-[30px]" />
              <img src="images/samsung.png" alt=""  className="w-[120px] h-[30px]"/>
              <img src="images/hub.svg" alt=""  className="w-[120px] h-[30px]"/>
              <img src="images/burger.svg" alt="" className="w-[120px] h-[30px]" /> */}



            </div>
          </div>

          <div>
            <div className=" bg-[#1a1a1a] border border-[#757575] rounded-2xl  p-4 shadow-lg ">
              <div className="max-w-md mx-auto  ">
                <h2 className="text-2xl font-bold mb-2 text-center">
                  BOOK A CALL WITH US
                </h2>
                <form className=" text-[#000]">
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-[#fff]"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-2 border rounded-md text-[#000]"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-[#fff]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="workEmail"
                      className="block text-sm font-medium text-[#fff]"
                    >
                      Work Email*
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      className="w-full p-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-[#fff]"
                    >
                      What Is Your Monthly Budget?*
                    </label>
                    <select
                      id="budget"
                      className="w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">Select your budget</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-20000">$10,000 - $20,000</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-[#fff]"
                    >
                      Location*
                    </label>
                    <select
                      id="location"
                      className="w-full p-2 border rounded-md"
                      required
                    >
                      <option value="">Select your location</option>
                      <option value="usa">USA</option>
                      <option value="europe">Europe</option>
                      <option value="asia">Asia</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="tasks"
                      className="block text-sm font-medium text-[#fff]"
                    >
                      What tasks would you like to solve?
                    </label>
                    <textarea
                      id="tasks"
                      className="w-full p-2 border rounded-md"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-md text-[#fff]"
                  >
                    Book a demo
                  </button>
                  <p className="text-xs text-center mt-4 text-[#fff]">
                    By clicking next, you agree to receive communications from
                    NinjaPromo in accordance with our Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
