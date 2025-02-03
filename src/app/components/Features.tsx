import Image from 'next/image';
const Features = () => {
  return (
          <div className="w-full h-auto bg-[#FAF4F4] py-10">
          {/* Grid Layout */}
          <div className="grid gap-8 sm:grid-cols-2 max-w-7xl mx-auto px-4 lg:px-8 ">
            {/* First Image Section */}
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src="/sidetable1.png"
                alt="Side Table 1"
                width={605}
                height={562}
                className="w-full mr-10 max-w-[80%] sm:max-w-full cursor-pointer transition-transform hover:scale-105"
              />
              <div className="mt-4  lg:mt-6 text-center lg:text-left">
                <p className="font-[500] text-[24px] lg:text-[36px] leading-[36px] lg:leading-[54px]">
                  Side Table
                </p>
                <p className="underline underline-offset-[20px] mt-2 cursor-pointer font-[500] text-[16px] lg:text-[18px] transition-transform hover:scale-105 hover:text-gray-700">
                  View More
                </p>
              </div>
            </div>
  
            {/* Second Image Section */}
            <div className="flex flex-col items-center lg:items-start">
              <Image
                src="/sidetable2.png"
                alt="Side Table 2"
                width={605}
                height={562}
                className="w-full mr-14 max-w-[80%] sm:max-w-full cursor-pointer transition-transform hover:scale-105"
              />
              <div className="mt-4 lg:mt-6 text-center lg:text-left">
                <p className="font-[500] text-[24px] lg:text-[36px] leading-[36px] lg:leading-[54px]">
                  Side Table
                </p>
                <p className="underline underline-offset-[20px] mt-2 cursor-pointer font-[500] text-[16px] lg:text-[18px] transition-transform hover:scale-105 hover:text-gray-700">
                  View More
                </p>
              </div>
            </div>
          </div>
        </div>
        )
      };
  
export default Features;
