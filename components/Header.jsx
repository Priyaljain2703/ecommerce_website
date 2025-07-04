
import React from 'react';
import { Search, ShoppingCart, UserCircle,  } from 'lucide-react';

// 025CB1 , 002B60 ,005EB9

const Header = () => {
  return (
    <header className="bg-[#025CB1] text-white px-5 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold">Logo</div>
      <div className=" flex justify-center relative w-full max-w-md">
      

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center ">
            <Search size={20} className="text-white" />
          </div>


          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-12 p-2 rounded-md text-white placeholder-[#d7d7d7] border border-[#cfcfcf] bg-transparent focus:outline-none focus:ring-0 focus:border-white"
          />
        

      </div>

      <div className="flex items-center gap-6">
        <button className="relative flex bg-[#002B60] px-5 py-2 rounded-md">
          <ShoppingCart size={24} />
          <p className='ml-2 text-md'>Cart</p>
          {/* <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1">2</span> */}
        </button>
      <div>
        <UserCircle size={30}/>
      </div>
      </div>
    </header>
  );
};

export default Header;
