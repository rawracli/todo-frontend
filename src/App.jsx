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
          {/* Mobile only */}
          <img
            src={smallImg}
            alt="Start Your Organize"
            className="w-full h-auto block sm:hidden"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />

          {/* Desktop only */}
          <img
            src={bigImg}
            alt="Start Your Organize"
            className="w-full h-auto hidden sm:block"
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
            className="bg-sky-400 font-semibold text-white px-5 md:text-xl text-xs py-1 shadow-lg rounded-xl hover:bg-sky-500  transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Dekstop & Mobile ex */}
      <div className="bg-white min-h-screen justify-center align-top w-full flex">
        <div className="bg-gray-50 w-[98%] h-150 rounded-4xl justify-center items-center flex flex-col">
          <div className="bg-gray-100 w-[90%] h-124 rounded-full items-center justify-center flex flex-col ">
            {/* <div className="bg-amber-300"></div> */}
            {/* <div className="bg-sky-800"></div> */}
            <div className="md:items-center justify-center flex lg:pr-17">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/src/assets/laptop.png"
                  alt=""
                  className="h-100 hidden md:block"
                />
                <h3 className="hidden md:block font-bold text-xl sm:text-2xl text-center mt-1">
                  A simple to-do app to keep you <br className="md:hidden" />
                  organized {/*<br className="lg:hidden"/>*/} and{" "}
                  <br className="hidden md:block" /> focused on{" "}
                  <br className="md:hidden" />
                  what matters.
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center md:hidden lg:flex">
                <img src="/src/assets/mobile.png" alt="" className="h-100" />
                <h3 className="font-bold text-xl sm:hidden sm:text-2xl text-center mt-1">
                  A simple to-do app to keep you <br className="md:hidden" />
                  organized {/*<br className="lg:hidden"/>*/} and{" "}
                  <br className="hidden md:block" /> focused on{" "}
                  <br className="md:hidden" />
                  what matters.
                </h3>
                <Link
                  to="/login"
                  className="sm:hidden md:block bg-sky-400 font-semibold text-white px-5 md:text-xl text-xs py-1 shadow-lg rounded-xl hover:bg-sky-500 mt-3 transition-colors"
                >
                  See more
                </Link>
              </div>
              <div className="hidden sm:flex sm:flex-col md:hidden items-start">
                <h3 className="font-bold text-xl sm:text-2xl mt-20 ml-5">
                  A simple to-do app to keep you <br className="md:hidden" />
                  organized {/*<br className="lg:hidden"/>*/} and{" "}
                  <br className="hidden md:block" /> focused on{" "}
                  <br className="md:hidden" />
                  what matters.
                </h3>
                <Link
                  to="/login"
                  className=" bg-sky-400 font-semibold text-white px-5 md:text-xl text-xs py-1 shadow-lg rounded-xl hover:bg-sky-500 mt-3 ml-8 transition-colors"
                >
                  See more
                </Link>
              </div>
            </div>
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
