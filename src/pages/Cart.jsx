import React from "react";

function Cart({ cart, removeFromCart, updateQty }) {
  const totalPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const finalPrice = (totalPrice * 0.9).toFixed(2);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {cart.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="h-28 w-28 sm:h-32 sm:w-32 object-contain rounded-xl hover:scale-105 transition-transform duration-300" />
                  <div>
                    <h2 className="font-semibold text-lg sm:text-xl">{item.title}</h2>
                    <p className="text-gray-600 sm:text-base">${item.price}</p>
                    <p className="text-gray-500 text-sm">Total: ${(item.price * item.qty).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                  <input
                    type="number"
                    className="w-16 text-center border rounded-lg p-1"
                    value={item.qty}
                    min="1"
                    onChange={(e) => updateQty(item, e.target.value)}
                  />
                  <button
                    onClick={() => removeFromCart(item)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-md hover:shadow-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-lg font-semibold text-white">Total Items: {cart.length}</div>
            <div className="text-lg font-semibold text-white">Total Price: ${totalPrice.toFixed(2)}</div>
            <div className="text-2xl sm:text-3xl font-bold text-white mt-4 sm:mt-0">Final Price (10% off): ${finalPrice}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
