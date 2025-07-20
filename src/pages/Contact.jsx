function Contact() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="py-40 xl:px-60 px-6">
      <div className="grid xl:grid-cols-2 grid-cols-1 xl:space-x-20">
        <div className="mb-3 xl:mb-0">
          <img
            src="/src/assets/top-view-arrangement-with-calendar-pencils.jpg"
            data-aos="fade-up"
            className="rounded-md shadow-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1
            className="font-bold xl:text-5xl text-4xl text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <span className="text-yellow-400">Kontak</span> Kami
          </h1>
          <p
            className="font-semibold text-gray-300 xl:mt-5 mt-3 text-2xl text-justify"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Punya pertanyaan, saran, atau butuh bantuan? Tim Todo Bee siap
            membantumu! Jangan ragu untuk menghubungi kami melalui kontak
            berikut. Kami ingin mendengar darimu.
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 mt-24 xl:space-x-10 xl:space-y-0 space-y-7">
        <div
          className="bg-gray-900 shadow-lg py-15 rounded-2xl "
          data-aos="fade-up"
        >
          <h1 className="text-5xl text-center text-white">
            <i className="fa-solid fa-phone"></i>
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-5">
            WhatsApp
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-3">
            0872 9821 1098
          </h1>
        </div>
        <div
          className="bg-gray-900 shadow-lg py-15 rounded-2xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1 className="text-5xl text-center text-white">
            <i className="fa-solid fa-envelope"></i>
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-5">
            Email
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-3">
            todobee@email.com
          </h1>
        </div>
        <div
          className="bg-gray-900 shadow-lg py-15 rounded-2xl"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <h1 className="text-5xl text-center text-white">
            <i className="fa-solid fa-location-dot"></i>
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-5">
            Lokasi
          </h1>
          <h1 className="text-2xl font-semibold text-center text-white mt-3">
            Kota Sukabumi
          </h1>
        </div>
      </div>
      </div>
      <div className="pt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.5495115589295!2d106.92013712615166!3d-6.915432129213436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6849d234eb57e1%3A0x63a7feb68b88d92d!2sDAPUR%20MUNGIL%20PUSAT!5e0!3m2!1sid!2sid!4v1751924156507!5m2!1sid!2sid"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Contact;
