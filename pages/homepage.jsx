import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

import { products } from '../lib/products';

const Home = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategories, setSelectedCategories] = useState(searchParams.getAll('category') || []);
  const [priceRange, setPriceRange] = useState([0, Number(searchParams.get('price')) || 10000]);

 
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    selectedCategories.forEach((cat) => params.append('category', cat));
    if (priceRange[1] !== 10000) params.set('price', priceRange[1]);

    const query = params.toString();
    router.push(`/?${query}`);
  }, [searchQuery, selectedCategories, priceRange]);


 const filteredProducts = products.filter((product) => {
    const inCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes('All') ||
      selectedCategories.includes(product.category);

   const inPriceRange =
  product.price >= priceRange[0] &&
  (priceRange[1] >= 10000 ? true : product.price <= priceRange[1]);


    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

    return inCategory && inPriceRange && matchesSearch;
  });

  const handleAddToCart = (product) => {
    console.log('Add to Cart:', product);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />


      <main className="flex-1 py-8 px-10 bg-white">
      

        <div className="flex flex-col md:flex-row gap-5">
          <SideBar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />

          <div className="flex-1">
            <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
