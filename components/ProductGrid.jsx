import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => {
  if (!products.length) {
    return <p className="text-gray-600 text-center">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;