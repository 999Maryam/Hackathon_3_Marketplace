
import Image from 'next/image';

const Features = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FBEBB5]">
      <div className="grid grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="text-center">
          <Image
            src="/sidetable.png"
            alt="Side Table"
            width={500}
            height={400}
            className="mx-auto"
          />
          <h3 className="mt-4 text-lg font-semibold">Side table</h3>
          <a href="#" className="mt-2 text-blue-600 underline">
            View More
          </a>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <Image
            src="/sofa1.png"
            alt="Sofa with side table"
            width={500}
            height={400}
            className="mx-auto"
          />
          <h3 className="mt-4 text-lg font-semibold">Sofa with Side table</h3>
          <a href="#" className="mt-2 text-blue-600 underline">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
