function About() {
  return (
    <div className="bg-gray-950 min-h-screen py-40 xl:px-60 px-6">
      <div>
        <h1 className="xl:text-5xl text-4xl text-white font-bold xl:text-center" data-aos="fade-up">
          <span className="text-yellow-400">Tentang</span> Kami
        </h1>
        <p
          className="text-2xl text-gray-300 font-semibold xl:text-center text-justify mt-5"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Todo Bee adalah aplikasi manajemen tugas yang dirancang untuk membantu
          kamu menjadi lebih teratur, fokus, dan produktif setiap hari. Mulai
          dari mencatat ide, menyusun jadwal harian, hingga menyelesaikan tugas
          tepat waktu semua bisa dilakukan dalam satu platform yang simpel dan
          menyenangkan.
        </p>
        <img
          src="/src/assets/time-organization-concept-close-up.jpg"
          className="mt-5 xl:h-[30rem] h-[20rem] w-full object-cover rounded-md shadow-lg"
          alt=""
          data-aos="fade-up"
          data-aos-duration="1400"
        />
      </div>
    </div>
  );
}

export default About;
