import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-gray-950 flex items-center min-h-screen py-10 2xl:py-20 2xl:px-60 px-6">
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:space-x-5">
          <div className="flex justify-center flex-col">
            <div className="flex justify-end xl:hidden">
            <img src="/src/assets/checklist-1-18.svg" className="w-[35rem]" alt="" />
          </div>
            <h1
              className="font-bold xl:text-6xl text-center xl:text-start text-4xl text-white"
              data-aos="fade-up"
            >
              <span className="text-yellow-400">Kelola tugas</span> harianmu
              dengan <span className="text-yellow-400">cara yang</span> lebih
              mudah <span className="text-yellow-400">dan teratur</span>
            </h1>
            <div
              data-aos="fade-up"
              className="pt-5 flex xl:justify-start justify-center"
              data-aos-duration="1400"
            >
              <Link
                to="/login"
                className="bg-yellow-400 font-semibold text-white px-10 xl:text-3xl text-2xl py-2 shadow-lg rounded-4xl hover:bg-yellow-500 transition-colors"
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
          <div className="xl:flex justify-end hidden">
            <img src="/src/assets/checklist-1-18.svg" className="xl:w-[35rem] w-[20rem]" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-40 2xl:px-60 px-6">
        <h1
          className="font-bold text-4xl xl:text-5xl text-white text-center"
          data-aos="fade-up"
        >
          Kelola <span className="text-yellow-400">Harimu</span> Jadi Lebih Baik
        </h1>
        <div
          className="grid xl:grid-cols-2 grid-cols-1 mt-16 xl:space-x-16"
          data-aos="fade-up"
        >
          <div>
            <img
              src="/src/assets/time-organization-concept-close-up.jpg"
              className="rounded-lg shadow-xl xl:mb-0 mb-3"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold xl:text-3xl text-2xl mb-3 xl:text-start text-justify text-white">
              Fokus Lebih Baik, Selesaikan Lebih Banyak
            </h1>
            <p className="text-gray-300 font-medium text-lg xl:text-start text-justify">
              Todo Bee membantumu mencatat, menjadwalkan, dan menyelesaikan
              semua tugas pentingmu setiap hari. Tidak ada lagi tugas yang
              terlupa semua tercatat rapi dalam satu aplikasi yang mudah
              digunakan.
            </p>
          </div>
        </div>
        <div
          className="grid xl:grid-cols-2 grid-cols-1 mt-20 xl:space-x-16 xl:text-end"
          data-aos="fade-up"
        >
          <div className="md:hidden">
            <img
              src="/src/assets/top-view-arrangement-with-calendar-pencils.jpg"
              className="rounded-lg shadow-xl mb-3"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-white xl:text-3xl text-justify xl:text-end text-2xl mb-3">
              Pantau Progres, Capai Target
            </h1>
            <p className="text-gray-300 font-medium text-lg text-justify xl:text-end">
              Tandai tugas yang sudah selesai, lihat apa saja yang tertunda, dan
              atur ulang prioritasmu dengan mudah. Todo Bee hadir untuk
              membantumu tetap produktif dan disiplin, kapan saja dan di mana
              saja.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src="/src/assets/top-view-arrangement-with-calendar-pencils.jpg"
              className="rounded-lg shadow-xl"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-40 2xl:px-60 px-6 grid xl:grid-cols-2 grid-cols-1 xl:space-x-16">
        <div data-aos="fade-up">
          <img
            src="/src/assets/time-organization-concept-with-planner-top-view.jpg"
            className="rounded-lg shadow-xl mb-3 xl:mb-0"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center" data-aos="fade-up">
          <h1 className="font-semibold text-3xl mb-3 text-white">
            Atur Tugasmu, Raih Hari yang Produktif
          </h1>
          <p className="text-gray-300 font-medium text-lg text-justify">
            Todo Bee membantumu mencatat tugas, mengatur jadwal, dan
            menyelesaikan pekerjaan tepat waktu. Cocok untuk pelajar, pekerja,
            atau siapa pun yang ingin hidup lebih teratur.
          </p>
          <div className="pt-5">
            <Link
              to="/login"
              className="bg-yellow-500 text-lg shadow-lg hover:bg-yellow-600 transition-colors rounded-3xl text-white font-medium px-5 py-2"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;