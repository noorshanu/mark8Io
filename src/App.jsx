import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import BelowSec from "./sections/BelowSec";
import Cta from "./sections/Cta";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <div className=" overflow-x-hidden h-[100vh]">
        <div className="css-1vx3a4p"></div>
        <Navbar />

        <Hero />
        <div className=" h-[30px]"></div>
        <div className=" mb-4">
          <BelowSec />
        </div>

        <About />

        <div className=" h-[30px]"> 

        </div>

        <Services/>

        <div>
          <Cta/>
        </div>

        <div className="">

          <Footer/>

        </div>
      </div>
    </>
  );
}

export default App;
