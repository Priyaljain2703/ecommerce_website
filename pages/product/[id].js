
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { products } from '../../lib/products';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '../../context/CardContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "../../src/app/globals.css"
import { ChevronLeft, ChevronRight } from 'lucide-react'; 



const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (id) {
      const selected = products.find((p) => p.id === parseInt(id));
      setProduct(selected);
    }
  }, [id]);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    if (!product?.images?.length) return;
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    if (!product?.images?.length) return;
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);

  };

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="h-screen flex flex-col bg-[#fff] text-[#fff]">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="flex-1 px-20 py-10 ">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center text-sm text-gray-700 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>
        <div className="flex flex-col md:flex-row gap-10">
        


          
          <div className="w-full md:w-1/2">
            <div className=" rounded-lg p-4 bg-white relative">
              {product.images && product.images.length > 0 && (
                <div className="relative">
                  <img
                    src={product.images[currentImage]}
                    alt={`Image ${currentImage + 1}`}
                    className="w-full h-[400px] object-contain rounded-md"
                  />

                 
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                      >
                        <ChevronLeft size={20} className='text-black' />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                      >
                        <ChevronRight size={20} className='text-black' />
                      </button>
                    </>
                  )}

                
                  <div className="flex gap-2 mt-4 justify-center">
                    {product.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        onClick={() => setCurrentImage(index)}
                        className={`w-16 h-16 object-cover cursor-pointer border ${currentImage === index ? 'border-blue-500' : 'border-gray-200'
                          } rounded`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>


          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-lg font-semibold text-black">₹{product.price}</p>
            <p className="text-sm text-gray-600">Category: {product.category}</p>
            <p className="text-sm text-gray-700">
              {product.description || 'This is a high-quality product perfect for everyday use.'}
            </p>

            
            <div className="flex items-center gap-2 mt-4 text-[#000]">
              <label className="text-sm font-medium text-[#000] ">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 px-2 py-1 border rounded-md text-[#000] border-black"
              />
            </div>

          
            <button
              onClick={handleAddToCart}
              className="mt-6 bg-[#025CB1] cursor-pointer text-white px-6 py-2 rounded-md transition w-65"
            >
              Add to Cart
            </button>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2 text-[#000]">Reviews</h2>
              {product.reviews.length > 0 ? (
                <ul className="space-y-4">
                  {product.reviews.map((review, index) => (
                    <li key={index} className="bg-[#fff] shadow-md  p-4 border-2 border-[#f8f8f8] rounded-md">
                      <p className="font-medium">{review.user}</p>
                      <p className="text-yellow-500">Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                      <p>{review.comment}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
