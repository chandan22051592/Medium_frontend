import { Link } from "react-router-dom";


export const Hero = () => {
  return (
    <section
      className="h-[590px] bg-[#F9F6EF] flex flex-row items-center justify-between px-6 md:px-16"
    >
      {/* Left: Text content */}
      <div className="max-w-2xl p-8">
        <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-tight text-black">
          Human <br /> stories & ideas
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mt-6">
          A place to read, write, and deepen your understanding
        </p>
        <Link to={'/signin'}>
        <button className="mt-10 px-6 py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition">
          Start reading
        </button></Link>
      </div>

      <div className="hidden md:block w-1/2 h-full">
        <img
          src="/image/test-1.jpg" 
          alt="Hero side illustration"
          className="h-full w-full "
        />
      </div>
    </section>
  );
};
