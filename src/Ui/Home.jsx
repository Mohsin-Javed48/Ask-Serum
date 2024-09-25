/** @format */
/** @format */

import ProductCard from "./ProductCard";

function Home() {
  return (
    <>
      {" "}
      <div className="relative bg-[url('../../public/bg-2.jpg')] bg-cover bg-center flex items-center justify-center h-[87vh]">
        {/* Overlay for darkening the background */}
        {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}

        <div className="relative z-10 text-center flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-start w-full md:w-1/2 p-6 md:p-0 md:ml-16">
            <h1 className="text-xl md:text-5xl font-bold text-[#6e421d] font-serif leading-tight">
              AskSerum with a Free consultation from our skincare expert.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-black">
              Your ultimate guide to achieving flawless
              <br /> skin and radiant beauty.
            </p>

            <div className="mt-6 space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg">
                Shop now
              </button>
              <button className="bg-white text-gray-800 py-2 px-6 rounded-lg">
                See details
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="mt-10 md:mt-0 flex justify-center w-full md:w-1/2">
            <img
              src="../../public/Fast Clear Serum Packshot.png"
              alt="Product Image"
              className="w-full  md:w-1/2 max-w-[300px] "
            />
          </div>
        </div>
      </div>
      <div className="brand-container">
        <h1 className="brand">Clinique</h1>
        <h1 className="brand">Avon</h1>
        <h1 className="brand">L'Oréal</h1>
        <h1 className="brand">Olay</h1>
      </div>
      <div className="py-8 text-center">
        {/* Section Header */}
        {/* <div className="mb-12">
          <h1 className="text-3xl font-semibold font-serif mb-4">
            Our Feature Product
          </h1>
          <p className="text-gray-500">
            Introducing our latest skincare product, the Glow Boosting Serum!
            Infused with powerful antioxidants.
          </p>
        </div> */}

        {/* Product Grid */}
        <div className="py-12 text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold font-serif mb-4">
              Our Feature Product
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Introducing our latest skincare product, the Glow Boosting Serum!
              Infused with powerful antioxidants.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-24">
            {/* Product 1 */}
            <ProductCard
              image="../../public/Fast Clear Serum Packshot.png"
              title="Ahava Mineral Hand Cream - Sea-Kissed"
              currentPrice="$24.00"
              oldPrice="$28.00"
            />

            {/* Product 2 */}
            <ProductCard
              image="https://via.placeholder.com/150"
              title="American Crew Daily Cleansing Shampoo"
              currentPrice="$29.00"
              oldPrice="$34.00"
            />

            {/* Product 3 */}
            <ProductCard
              image="https://via.placeholder.com/150"
              title="Alterna Caviar Anti-Aging Anti-Frizz"
              currentPrice="$32.00"
              oldPrice="$40.00"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

/*
function Home() {
  return (
    <div className="relative bg-[url('bg-2.jpg')] bg-cover bg-center flex  items-center justify-center h-[87vh] ">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center flex flex-row  ">
        <div className="text-start  relative w-90 ml-16 ">
          <h1 className="text-4xl md:text-6xl font-bold text-[#4B3D2A] font-serif">
            AskSerum with a Free consultation from our skincare expert.W B
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Your ultimate guide to achieving flawless skin and radiant beauty.
          </p>

          <div className="mt-6 space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg">
              Shop now
            </button>
            <button className="bg-white text-gray-800 py-2 px-6 rounded-lg">
              See details
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center  w-1/2 ">
          <img
            src="../../public/Fast Clear Serum Packshot.png"
            alt="Product Image"
            className=" h-full md:w-1/5"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

*/
