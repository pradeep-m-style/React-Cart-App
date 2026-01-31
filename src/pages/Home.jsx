import React, { useEffect, useState } from "react";

function Home({ cart, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map(product => {
        const inCart = cart.find(x => x.id === product.id);
        return (
          <div key={product.id} className="bg-white/90 backdrop-blur-lg p-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col">
            <img src={product.image} alt={product.title} className="h-56 w-full object-contain mb-4 hover:scale-105 transition-transform duration-300" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">{product.description}</p>
            <p className="text-blue-600 font-bold text-lg mb-4">${product.price}</p>

            {inCart ? (
              <button
                onClick={() => removeFromCart(product)}
                className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="mt-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
