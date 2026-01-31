import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

function AppRoutes({ cart, addToCart, removeFromCart, updateQty }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
      />
      <Route
        path="/cart"
        element={<Cart cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />}
      />
    </Routes>
  );
}

export default AppRoutes;
