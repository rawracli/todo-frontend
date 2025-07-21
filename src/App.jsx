import { Link } from "react-router-dom";
import smallImg from "/src/assets/Start Your Organize Small.png";
import bigImg from "/src/assets/Start Your Organize Big.png";

function App() {
  return (
    <>
      <div className="bg-white flex flex-col items-center min-h-fit py-10 2xl:py-20 2xl:px-60 px-6 mx-8 rounded-t-2xl">
        <div
          className="flex flex-col items-center mt-5 md:mt-20"
          style={{
            backgroundImage: `url('/src/assets/wave.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          {/* <h1
            className="font-bold xl:text-9xl text-center text-7xl text-white"
            data-aos="fade-up"
          >
            <span className="from-gray-400 bg-gradient-to-r to-gray-600 bg-clip-text text-transparent">Start Your</span> Organize <br /> Journey <span className="text-sky-500">Here</span>
          </h1> */}
          <img
            src={smallImg}
            srcSet={`${smallImg} 940w, ${bigImg} 1024w`}
            sizes="(max-width: 768px) 100vw, 1024px"
            alt="Start Your Organize"
            className="w-full h-auto"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
        </div>
        <div
          data-aos="fade-up"
          className="pt-5 flex xl:justify-start justify-center"
          data-aos-duration="1400"
        >
          <Link
            to="/login"
            className="bg-sky-400 font-semibold text-white px-5 md:text-xl text-xs py-1 shadow-lg rounded-xl hover:bg-sky-500 hover:mt-0.5 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Dekstop & Mobile ex */}
      <div className="bg-white min-h-screen justify-center align-top w-full flex lg:pt-3">
        <div className="bg-gray-50 w-[98%] lg:w-[90%] h-150 rounded-4xl justify-center items-center flex flex-col">
          <div className="bg-gray-100 w-[90%] lg:w-[85%] h-124 rounded-full items-center justify-center flex flex-col ">
            {/* <div className="bg-amber-300"></div> */}
            {/* <div className="bg-sky-800"></div> */}
            <div className="items-center justify-center flex lg:pr-17">
              <img src="/src/assets/laptop.png" alt="" className="h-100 hidden md:block" />
              <img src="/src/assets/mobile.png" alt="" className="h-100 block md:hidden lg:block" />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-center mt-1">
              A simple to-do app to keep you <br className="sm:hidden"/>organized {/*<br className="lg:hidden"/>*/} and <br className="hidden md:block"/> focused on <br className="sm:hidden"/>what
              matters.
            </h3>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white justify-center min-h-screen items-center px-6 py-10 xl:space-x-16 flex">
        <div className="rounded-[110px] border-y-2 w-full min-h-screen"></div>
      </div>
    </>
  );
}

export default App;
