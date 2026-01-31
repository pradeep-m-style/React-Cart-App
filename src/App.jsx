import { Link } from "react-router-dom";
import { useState } from "react";
import Routes from "./routes/Routes";

function App() {
  // ---------------------
  // Cart state & handlers
  // ---------------------
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(cart.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((x) => x.id !== product.id));
  };

  const updateQty = (product, qty) => {
    if (qty < 1) return;
    setCart(cart.map((x) => x.id === product.id ? { ...x, qty: Number(qty) } : x));
  };

  // ---------------------
  // Navbar + Routes
  // ---------------------
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Navbar */}
      <nav className="bg-sky-400 shadow-md sticky top-0 z-50 p-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold text-white hover:text-blue-800 transition transform hover:scale-105"
        >
          Cart App
        </Link>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-white text-gray-700 font-semibold hover:text-blue-600 transition"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="text-white font-semibold hover:text-blue-600 transition relative"
          >
            Cart
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-bounce">
              {cart.length}
            </span>
          </Link>
        </div>
      </nav>

      {/* All routing handled in Routes.jsx */}
      <div className="p-4">
        <Routes
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          updateQty={updateQty}
        />
      </div>
    </div>
  );
}

export default App;
