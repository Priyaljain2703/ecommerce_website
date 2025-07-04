// pages/card.js
import React from 'react';
import { useCart } from '../context/CardContext'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

const CardPage = () => {
  const { cartItems = [], removeFromCart, updateQuantity } = useCart();
   const router =useRouter();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-10">
      <button onClick={() => router.back()} className="px-4 py-2 bg-gray-200 rounded">
      ← Back
    </button>
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-lg bg-white shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-600">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <label className="text-sm">Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 px-2 py-1 border rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="border-t pt-6 text-right">
              <p className="text-lg font-semibold">Subtotal: ₹{subtotal}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md">
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
