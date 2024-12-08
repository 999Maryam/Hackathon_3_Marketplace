import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="bg-[#FBEBB5] min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-8">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-medium text-black mb-4">
            Rocket single
            <br /> seater
          </h1>
          <button className="mt-2 text-lg text-black underline hover:text-gray-700">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/sofa.png" // Replace with actual image path
            alt="Rocket Single Seater"
            className="w-full max-w-md md:max-w-lg drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
