  function About() {
    return (
      <div className="bg-white flex flex-col min-h-screen mx-8 rounded-t-2xl">
        <h1 className="text-[7rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] pl-10 sm:pl-20 md:pl-25 lg:pl-30 pt-5 sm:pt-10 md:pt-15 lg:pt-20 leading-19 sm:leading-34 md:leading-39 lg:leading-44">About</h1>
      <div className="flex mt-4 justify-end sm:justify-normal pr-17 sm:pr-0">
        <div className="hidden sm:flex bg-[#F6F6F6] w-[60%] p-4 pl-9 text-lg sm:text-[1rem] md:text-[1.29rem] lg:text-3xl font-bold rounded-r-2xl leading-11">
          <div className="flex flex-col">
            <h4>Company name</h4>
            <h4>Founded In</h4>
            <h4>Address</h4>
          </div>
          <div className="ml-5 flex flex-col">
            <h4>: FocusFlow ltd.</h4>
            <h4>: Sukabumi, Indonesia</h4>
            <h4>: July, 2025</h4>
          </div>
        </div>
        <h1 className="text-[7rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] sm:pl-4 pt-9 sm:pt-10 md:pt-15 lg:pt-20 leading-0">Us</h1>
      </div>
    </div>
  );
}

export default About;
