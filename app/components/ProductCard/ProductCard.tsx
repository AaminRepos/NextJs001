import AddToCart from "../AddToCart";
import React from "react";

const ProductCard = () => {
  return (
    <div className='
      bg-sky-400
        p-5 my-5 
        text-white 
        text-lg 
        hover:bg-sky-900'>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
