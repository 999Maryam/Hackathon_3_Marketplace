import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div className="bg-[#FBEBB5] w-full h-auto">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 flex flex-col-reverse lg:flex-row items-center lg:justify-between">
        {/* Text Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left lg:w-1/2 lg:mt-20">
          <p className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] mt-10 sm:mt-16 md:mt-20 font-[500] leading-[36px] sm:leading-[48px] md:leading-[64px] lg:leading-[86px]">
            Rocket Single Seater
          </p>
          <Link
            href="/Shop"
            className="mt-4 text-[16px] sm:text-[20px] md:text-[24px] font-[500] leading-[24px] sm:leading-[28px] md:leading-[36px] relative inline-block text-black transition-all underline underline-offset-[20px]"
          >
            Shop Now
          </Link>
        </div>
        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Image 
          src="/sofa.png"
          alt="Rocket Single Seater"
          width={853}
          height={1000}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
