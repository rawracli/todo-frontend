export default function Card({ name, image, testimonial }) {
  return (
    <div className="bg-[#e6e6e6] h-100 w-70 rounded-4xl flex flex-col items-center justify-between drop-shadow-lg">
      <div className="flex flex-col items-center justify-center pt-13">
        <img
          src={image}
          alt="Profile Picture"
          className="w-27 h-27 rounded-full mb-4"
        />
        <div className="flex items-center w-full">
          <hr className="bg-gray-500 w-6 ml-6 border-t-2 flex-1" />
          <h3 className="text-xl font-black mx-2">{name}</h3>
          <hr className="bg-gray-500 w-6 mr-6 border-t-2 flex-1" />
        </div>
        <p className="text-center text-gray-700 mt-3 px-8 text-[1.17rem] tracking-tight leading-tight">
          {testimonial}
        </p>
      </div>
      <div className="mx-4 flex items-center justify-center mb-3">
        <img
          src="/src/assets/stars.png"
          alt="5 stars"
          srcset=""
          className="h-12"
        />
      </div>
    </div>
  );
}
