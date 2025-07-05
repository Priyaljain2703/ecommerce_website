
import React from 'react';
import { useCart } from '../context/CardContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { X } from 'lucide-react';
import { useState } from "react";

const SHIPPING_CHARGE = 100;

const CardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItems = [], removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + SHIPPING_CHARGE;

  return (
    <div className="h-screen flex flex-col bg-gray-50">
         <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex-1 px-4 md:px-20 lg:px-40 py-10 bg-white">
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm text-gray-600 hover:text-black"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-semibold text-gray-800 mb-8">YOUR CART</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is currently empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white border border-[#f6f6f6] p-4 rounded-md shadow-sm"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain  rounded-md"
                    />
                    <div>
                      <h2 className="text-md font-medium text-gray-800">{item.title}</h2>
                      <p className="text-sm text-gray-600">₹{item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2 gap-2">
                        <label className="text-sm text-[#000]">Qty:</label>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value) || 1)
                          }
                          className="w-16 border px-2 py-1 text-center rounded-md text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-600"
                  >
                   <X/>
                  </button>
                </div>
              ))}
             
        
            </div>

            
            <div className="bg-white border border-[#f4f4f4] rounded-md shadow-md p-6 h-fit">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">CART TOTALS</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping (3–5 Business Days)</span>
                  <span className="text-green-600">{SHIPPING_CHARGE}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (US Estimate)</span>
                  <span>₹0</span>
                </div>
                  <div className="flex items-center gap-2 mt-4 my-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="border px-3 py-2 rounded-md w-full max-w-xs"
                />
                <button className="bg-[#024c92]  text-white px-4 py-2 rounded-md">
                  Apply
                </button>
              </div> 
                <hr className='my-4'/>
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

                  
              <button className="w-full mt-3 bg-[#024c92] text-white font-semibold py-3 rounded-md ">
                Proceed to Checkout
              </button>
          
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CardPage;
