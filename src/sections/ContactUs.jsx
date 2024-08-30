import React from "react";

function ContactUs() {
  return (
    <section className=" w-full" id="contactus">
      <div className=" container-wrapper">
        <div className=" flex justify-between ">
          <div className=" w-full sm:w-1/2">
            <h1>Ready to take your marketing to the next level?</h1>

            <p>Book a demo and discovery call to get a look at:</p>
          </div>

          <div>
            <div className=" bg-[#000] rounded-2xl border p-4 shadow-lg ">
              <div className="max-w-md mx-auto  ">
                <h2 className="text-2xl font-bold mb-6">BOOK A CALL WITH US</h2>
                <form className=" text-[#000]">
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium"
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
                      className="block text-sm font-medium"
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
                      className="block text-sm font-medium"
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
                      className="block text-sm font-medium"
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
                      className="block text-sm font-medium"
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
                      className="block text-sm font-medium"
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
                    className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-md"
                  >
                    Book a demo
                  </button>
                  <p className="text-xs text-center mt-4">
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
