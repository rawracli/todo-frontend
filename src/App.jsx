import { Link } from "react-router-dom";
import smallImg from "/src/assets/Start Your Organize Small.png";
import bigImg from "/src/assets/Start Your Organize Big.png";
import feature from "./components/features/feature.jsx";
import Card from "./components/Card.jsx";

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
          data-aos="fade-up"
          data-aos-duration="1200"
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
      <div className="bg-[linear-gradient(to_bottom,white_50%,#d1d5db_50%)] min-h-screen justify-center align-top w-full flex">
        <div className="bg-[#F6F6F6] w-[100%] h-150 rounded-full justify-center items-center flex flex-col">
          <div className="bg-[#F2F2F2] w-[90%] h-124 rounded-full items-center justify-center flex flex-col ">
            {/* <div className="bg-amber-300"></div> */}
            {/* <div className="bg-sky-800"></div> */}
            <div className="md:items-center justify-center flex lg:pr-17">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/src/assets/laptop.png"
                  alt=""
                  className="h-100 hidden md:block"
                  data-aos=""
                  data-aos-duration="1200"
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

      {/* //todo: use fluid layout for features section */}
      {/* Features */}
      <div className="relative overflow-visible bg-[#d1d5db] justify-center min-h-screen items-center px-6 py-10 xl:space-x-16 flex">
        <div className="rounded-[110px] border-y-2 w-full min-h-[80vh] f items-center justify-center">
          <div className="flex flex-col items-center justify-center pt-4">
            <h2 className="absolute top-5 text-5xl md:text-6xl font-bold text-center mb-5 bg-[#d1d5db]">
              What Can We Do?
            </h2>
          </div>
          <div className="grid grid-cols-1 mt-7 mb-6 sm:mb-3 mx-10 sm:mx-15 md:mx-20 md:grid-cols-2 md:grid-rows-2 min-h-[65vh]">
            <div className="border-b-2 border-r-2 text-right  pt-3 pb-3 md:pb-1 pr-3">
              {feature({
                heading: "Smart Task Management",
                description:
                  "Easily create, edit, and organize your daily tasks to stay focused and productive.",
              })}
            </div>
            <div className="border-b-2 border-l-2 text-left  pt-3 pb-3 md:pb-1 pl-3">
              {feature({
                heading: (
                  <>
                    Deadline &{" "}
                    <span className="block lg:inline">Reminder Alerts</span>
                  </>
                ),
                description:
                  "Never miss a task with custom due dates and timely notifications directly sent to your email.",
              })}
            </div>
            <div className="border-t-2 border-r-2 text-right  pt-3 pb-3 md:pb-1 pr-3">
              {feature({
                heading: "Categories & Labels",
                description:
                  "Group your tasks by category or label for a cleaner, more personalized workflow.",
              })}
            </div>
            <div className="border-t-2 border-l-2 text-left  pt-3 pb-3 md:pb-1 pl-3">
              {feature({
                heading: "Progress Tracking",
                description:
                  "Track your completed tasks and monitor your progress over time with visual indicators.",
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col bg-[#d1d5db] w-full py-10 px-6 min-h-screen">
        <div className=" flex items-center justify-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            Trusted by Productive People
          </h1>
        </div>
        <div className="overflow-x-auto mt-15 scrollbar-hide">
          <div className="flex min-w-max gap-10 my-3">
            {Card({
              name: "Hafidz",
              image: "/src/assets/hafidz.png",
              testimonial:
                "“Finally, a to-do list that’s simple and fast. I use it every day to stay on track and I love how clean the interface is!”",
            })}
            {Card({
              name: "Keiza",
              image: "/src/assets/keiza.png",
              testimonial:
                "“I upgraded to Productivity+ and now I never miss a deadline. The reminders and cloud sync are game changers.”",
            })}
            {Card({
              name: "Dirga",
              image: "/src/assets/dirga.png",
              testimonial:
                "“I’ve tried so many productivity apps, but this one just works. Lightweight, reliable, and no distractions.”",
            })}
            {Card({
              name: "Indra",
              image: "/src/assets/indra.png",
              testimonial:
                "“Super easy to use and works on both my phone and laptop. I recommend it to all my friends.”",
            })}
            {Card({
              name: "Rangga",
              image: "/src/assets/rangga.png",
              testimonial:
                "“I upgraded to Productivity+ and now I never miss a deadline. The reminders and cloud sync are game changers.”",
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#d1d5db] w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl sm:text-8xl md:text-9xl text-center">
          What are you <br /> waiting for?
        </h1>
        <Link
          to="/login"
          className="mt-10 bg-[#00AEFF] font-semibold text-white px-5 md:text-xl text-xs py-1 shadow-lg rounded-xl hover:bg-sky-500  transition-colors"
        >
          Join Now
        </Link>
      </div>
    </>
  );
}

export default App;
