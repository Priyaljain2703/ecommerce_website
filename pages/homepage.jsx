import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';


export const products = [
  {id: 1, title: 'iPhone 14',category: 'Electronics',brand: 'Apple',price: 80000,image: 'iphone.png',rating: 5,},
  {id: 2,title: 'Smart TV',category: 'Electronics',brand: 'Samsung',price: 45000,image: 'smarttv.jpg',rating:4,},
  {id: 3,title: 'Sony Headphones',category: 'Electronics',brand: 'Sony',price: 7000,image: 'headphones.png',rating: 4,},
  {id: 4,title: 'Dell Laptop',category: 'Electronics',brand: 'Dell',price: 60000,image: 'laptop.png',rating: 4,},
  {id: 5,title: 'Smartwatch',category: 'Electronics',brand: 'Noise',price: 3000,image: 'smartwatch.png',rating: 3,},
  {id: 6,title: 'Canon DSLR Camera',category: 'Electronics',brand: 'Canon',price: 55000,image: 'camera.png',rating: 5,},
  {id: 7,title: 'Bluetooth Speaker',category: 'Electronics',brand: 'JBL',price: 2500,image: 'bluetooth.png',rating: 4,},

  {id: 8,title: 'Men\'s T-Shirt',category: 'Clothing',brand: 'Zara',price: 800,image: 'mens_tshirt.png',rating: 4,},
  {id: 9,title: 'Women\'s Jeans',category: 'Clothing',brand: 'Levi\'s',price: 2500,image: 'womens_jeans.png',rating: 4,},
  {id: 10,title: 'Jacket',category: 'Clothing',brand: 'H&M',price: 3500,image: 'jacket.png',rating: 4,},
  {id: 11,title: 'Cotton Kurti',category: 'Clothing',brand: 'Fabindia',price: 1200,image: 'cotton_kurti.png',rating: 5,},
  {id: 12,title: 'Men\'s Sneakers',category: 'Clothing',brand: 'Nike',price: 5000,image: 'menSneaker.png',rating: 4,},
  {id: 13,title: 'Formal Shirt',category: 'Clothing',brand: 'Van Heusen',price: 1800,image: 'formalshirt.png',rating: 3,},
  {id: 14,title: 'Wooden Dining Table',category: 'Home',brand: 'Urban Ladder',price: 20000,image: 'dinning.jpg',rating: 5,},
  {id: 15,title: 'Sofa Set',category: 'Home',brand: 'Godrej',price: 30000,image: 'sofaset.jpg',rating: 4,},
  {id: 16,title: 'Double Bed',category: 'Home',brand: 'Pepperfry',price: 28000,image: 'bed.jpg',rating: 4,},
  {id: 17,title: 'Curtains',category: 'Home',brand: 'AmazonBasics',price: 1200,image: 'curtains.jpg',rating: 3,},
  {id: 18,title: 'Table Lamp',category: 'Home',brand: 'Philips',price: 900,image: 'lamp.jpg',rating: 4,},
  {id: 19,title: 'Wall Art Painting',category: 'Home',brand: 'Home Centre',price: 1500,image: 'wallpainting.png',rating: 5,},
  {id: 20,title: 'Floor Rug',category: 'Home',brand: 'IKEA',price: 3000,image: 'floor_rug.jpg',rating: 4,},
];



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
      

        <div className="flex flex-col md:flex-row gap-4">
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
