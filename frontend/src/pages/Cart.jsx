import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const DELIVERY_CHARGE = 50;
  const DISCOUNT_PERCENTAGE = 10;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const event = new CustomEvent("cartUpdated");
    window.dispatchEvent(event);
  };

  const handleQuantityChange = (id, increment) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: increment
            ? (item.quantity || 1) + 1
            : Math.max((item.quantity || 1) - 1, 1),
        };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const event = new CustomEvent("cartUpdated");
    window.dispatchEvent(event);
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const calculateDiscount = (subtotal) => {
    return ((subtotal * DISCOUNT_PERCENTAGE) / 100).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const discount = parseFloat(calculateDiscount(subtotal));
    return (subtotal - discount + DELIVERY_CHARGE).toFixed(2);
  };

  return (
    <div className="bg-green-200 p-6 min-h-screen text-black">
      <h1 className="text-3xl mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 p-4 border border-black rounded-lg"
            >
              <div className="text-black">
                <h2 className="text-xl">{item.name}</h2>
                <p>Price: ₹{item.price}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, false)}
                    className="border border-black bg-white text-black px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-4 text-black">
                    Quantity: {item.quantity || 1}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, true)}
                    className="border border-black bg-white text-black px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <p className="text-black">Color: {item.selectedColor}</p>
                <p className="text-black">Age: {item.age}</p>
                <p className="text-black">Breed: {item.breed}</p>

                <p className="text-black">
                  Subtotal: ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex flex-col mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-xl">Subtotal:</span>
              <span className="text-xl">₹{calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl">
                Discount ({DISCOUNT_PERCENTAGE}%):
              </span>
              <span className="text-xl">
                -₹{calculateDiscount(calculateSubtotal())}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl">Delivery Charge:</span>
              <span className="text-xl">₹{DELIVERY_CHARGE}</span>
            </div>
            <div className="flex justify-between font-bold text-2xl">
              <span>Total:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <Link to="/checkout">
              <button className="bg-green-600 text-white px-6 py-2 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
