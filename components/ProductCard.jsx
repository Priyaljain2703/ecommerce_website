import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';
import "../src/app/globals.css"
import { useCart } from '../context/CardContext'; 

const ProductCard = ({ product}) => {
    const { addToCart } = useCart();

  return (
    <div className="border-2 border-[#efefef] shadow-sm p-4 flex flex-col bg-white hover:shadow-lg transition w-full h-full rounded-lg">
     
      <Link href={`/product/${product.id}`} className="block">
        <div className="w-full h-60 mb-2 overflow-hidden rounded-md bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="font-semibold text-lg mb-1 text-[#000]">{product.title}</h3>

        <div className="flex justify-between items-center mb-2">
          <p className="text-[#000] font-semibold text-lg">₹{product.price}</p>
          {product.rating && (
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }, (_, index) =>
                index < Math.round(product.rating) ? (
                  <Star key={index} size={16} fill="currentColor" stroke="currentColor" />
                ) : (
                  <Star key={index} size={16} fill="none" stroke="currentColor" className="text-gray-300" />
                )
              )}
              <span className="text-gray-600 text-xs ml-1">({product.rating})</span>
            </div>
          )}
        </div>
      </Link>

    
      <button
         onClick={() => addToCart(product)}
        className="mt-auto bg-[#025CB1] text-white px-4 py-2 rounded cursor-pointer transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
