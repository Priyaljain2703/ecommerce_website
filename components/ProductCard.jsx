import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border-2 border-[#efefef] rounded-lg shadow-md p-4 flex flex-col bg-white hover:shadow-lg transition w-80">
      <div className="w-full h-60 mb-2 overflow-hidden rounded-md bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
      <p className="text-blue-700 font-bold mb-2">₹{product.price}</p>
      {product.rating && (
        <div className="text-yellow-500 mb-2">
          {'⭐'.repeat(Math.round(product.rating))}
        </div>
      )}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-[#025CB1] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
