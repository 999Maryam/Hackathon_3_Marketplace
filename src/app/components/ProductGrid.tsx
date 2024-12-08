import Image from 'next/image';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/chair.png",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/group.png",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/bartable.png",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/console.png",
    },
  ];

  return (
    <div className="px-6 py-12 bg-white">
      <h2 className="text-2xl font-bold text-center">Top Picks For You</h2>
      <p className="mt-2 text-gray-500 text-center">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="mt-2 text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-block px-6 py-2 text-white bg-black rounded hover:bg-gray-800"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default ProductGrid;
