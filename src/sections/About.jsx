import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const heading = [
  {
    text: "Unlock Revenue Growth for your",
  },
  {
    text: "Business",
    className: "txt-grad font-bold",
  },
];

function About() {
  const card = useRef();

  const para1 = useRef();
  const para2 = useRef();
  const button1 = useRef();

  useGSAP(
    () => {
      const letters = document.querySelectorAll(".about-heading-letter");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          toggleActions: "play none none reverse",
          onLeaveBack: () => card.current.classList.remove("nft"),
        },
      });

      tl.fromTo(
        card.current,
        { scale: 0, transformOrigin: "bottom" },
        {
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          onComplete: () => card.current.classList.add("nft"),
        }
      );

      tl.fromTo(
        letters,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: letters.length * 0.015,
          stagger: 0.02,
          ease: "power2.out",
        },
        "<"
      );

      tl.fromTo(
        [para1.current, para2.current, button1.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.4,
          stagger: 0.4 / 3,
        },
        "-=0.35"
      );
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <section className=" py-8 relative" id="about">
      <div className="css-we3"></div>
      <div className=" container-wrapper">
        <div className=" flex justify-between items-center flex-col sm:flex-row gap-3">
          <div className=" w-full sm:w-1/2 flex justify-center">
            <img
              src="assets/asset 26.svg"
              alt=""
              className="h-[450px] shadow-md border border-[#ffffff00]"
              ref={card}
            />
          </div>

          <div className=" w-full sm:w-1/2">
            <h2 className="text-4xl sm:text-6xl font-manbold pb-4 font-medium flex flex-wrap gap-x-4">
              {heading.map((part) =>
                part.text.split(" ").map((word, i) => (
                  <span key={i} className={`overflow-hidden`}>
                    {word.split("").map((letter, j, arr) => (
                      <span
                        key={j}
                        style={{
                          backgroundSize: `${arr.length * 100}%`,
                          backgroundPosition: `${j * 0.1 * 100}%`,
                        }}
                        className={`about-heading-letter inline-block ${
                          part.className
                        } ${letter.toLowerCase() === "y" ? "-mr-[5px]" : ""}`}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                ))
              )}
            </h2>

            <p ref={para1} className="text-lg">
              At Mark8, we revolutionize your marketing strategy with
              first-class customer experience and cutting-edge tools. Our
              expertise in the web3 community ensures your product stands out
              and captures the attention it deserves.
            </p>

            <p ref={para2} className=" text-lg my-8">
              Partner with us and watch your brand thrive in the digital
              frontier.
            </p>

            <a ref={button1} href="/" className="inline-block">
              {" "}
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
