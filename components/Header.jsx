
import { Search, ShoppingCart, UserCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CardContext'; 

const Header = ({ searchQuery, setSearchQuery }) => {
   const { cartItems } = useCart();
    const [hasMounted, setHasMounted] = useState(false);
 useEffect(() => {
    setHasMounted(true);
  }, []);

  const totalQty = cartItems?.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="bg-[#024c92] text-white px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">Logo</div>

      <div className="flex justify-center relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Search size={20} className="text-white" />
        </div>

        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 p-2 rounded-md text-white placeholder-[#d7d7d7] border border-[#cfcfcf] bg-transparent focus:outline-none focus:ring-0 focus:border-white"
        />
      </div>

      <div className="flex items-center gap-6">


        <Link href="/card">
        <div className="relative flex bg-[#002B60] px-5 py-2 rounded-md cursor-pointer">
          <ShoppingCart size={24} />
          <p className='ml-2 text-md'>Cart</p>
           {hasMounted && totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white px-1 rounded-full text-xs">
              {totalQty}
            </span>
          )}
        </div>
        </Link>
        <div>
          <UserCircle size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
