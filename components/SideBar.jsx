import React from 'react';

const categories = ['All','Electronics', 'Clothing', 'Home'];

const SideBar = ({ selectedCategories, setSelectedCategories, priceRange, setPriceRange }) => {
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceChange = (e) => {
    setPriceRange([0, Number(e.target.value)]);
  };

  return (
    <div className="w-full md:w-1/4 lg:w-1/5 bg-[#fbfbfb] overflow-y-auto p-4 rounded-md shadow-md border-2 border-[#ecebeb] mr-8 h-100" >
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Category</h2>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label key={cat} className="inline-flex items-center">
              <input
                type="checkbox"
                value={cat}
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <input
          type="range"
          min="0"
          max="11000"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full"
        />
        <p className="text-sm text-gray-600 mt-1">
          ₹0 - {priceRange[1] >= 10000 ? '₹10000+' : `₹${priceRange[1]}`}
        </p>

      </div>
    </div>
  );
};

export default SideBar;