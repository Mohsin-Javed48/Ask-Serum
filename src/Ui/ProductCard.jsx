/** @format */
const ProductCard = ({ image, title, currentPrice, oldPrice }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-[430px]  ">
      <img
        src={image}
        alt={title}
        className="w-full h-4/6 object-cover mb-1 rounded-lg border-black"
      />
      <h2 className="text-gray-800 text-lg font-medium mb-2 text-start">
        {title}
      </h2>
      <div className="text-start mb-1">
        <span className="text-red-500 text-base line-through ">{oldPrice}</span>
        <span className="text-xl font-bold text-gray-900">{currentPrice}</span>
      </div>
      <button className="bg-white border border-black text-black font-medium py-2 px-6 rounded-full hover:bg-gray-700 transition w-full ">
        Add to cart
      </button>
    </div>
  );
};
export default ProductCard;
