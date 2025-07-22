function Contact() {
  return (
    <div className="bg-white flex flex-col min-h-screen mx-8 rounded-t-2xl">
      <h1 className="text-[15rem] pl-30 pt-20 leading-44">Contact</h1>
      <div className="flex mt-4">
        <h1 className="text-[15rem] pl-50 pt-20 leading-13">Us</h1>
        <div className=" flex bg-[#F6F6F6] w-full mt-6 p-5 pl-15 ml-2 text-3xl font-bold rounded-l-2xl leading-11">
          <div className="flex flex-col">
            <li>Email</li>
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>X</li>
          </div>
          <div className="ml-21 flex flex-col">
            <h4>: 123rawracli@gmail.com</h4>
            <h4>: +6287853588871</h4>
            <h4>: @rawracli</h4>
            <h4>: @rawracli</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
