import { useState } from "react";

const ExploreCards = ({ img, color, name, price, setCartItemCount}) => {
  const [liked, setLiked] = useState(false);

  function cartQuanitity() {
    setCartItemCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="bg-neutral-100 w-full h-auto shadow-xl rounded-lg mx-auto text-center mt-4 border-t-4 border-yellow-900 p-6 ">
      <img src={img} alt={name} className="mx-auto h-40 md:h-64" />
      <h2>{color}</h2>
      <p className="text-xl max-md:text-lg font-medium ">{name}</p>
      <p className="text-lg max-md:text-sm text-gray-600">{price}</p>

      <div className="flex justify-between items-center px-4">
        <button
          onClick={cartQuanitity}
          className={`bg-[#371409] text-white px-4 py-2 rounded-lg hover:opacity-[0.9] transition duration-300 cursor-pointer mt-4 max-md:text-xs `}
        >
          Add to Cart
        </button>

        <i
          onClick={() => setLiked(!liked)}
          className={`fa-regular fa-heart text-2xl cursor-pointer max-md:text-lg ${
            liked ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart"
          }`}
        ></i>
      </div>
    </div>
  );
};

export default ExploreCards;


