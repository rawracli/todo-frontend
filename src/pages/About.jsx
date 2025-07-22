function About() {
  return (
    <div className="bg-white flex flex-col min-h-screen mx-8 rounded-t-2xl">
      <h1 className="text-[15rem] pl-30 pt-20 leading-44">About</h1>
      <div className="flex mt-4">
        <div className=" flex bg-[#F6F6F6] w-[60%] p-4 pl-9 text-3xl font-bold rounded-r-2xl leading-11">
          <div className="flex flex-col">
            <li>Company name</li>
            <li>Founded In</li>
            <li>Address</li>
          </div>
          <div className="ml-5 flex flex-col">
            <h4>: FocusFlow ltd.</h4>
            <h4>: Sukabumi, Indonesia</h4>
            <h4>: July, 2025</h4>
          </div>
        </div>
        <h1 className="text-[15rem] pl-4 pt-20 leading-0">Us</h1>
      </div>
    </div>
  );
}

export default About;
