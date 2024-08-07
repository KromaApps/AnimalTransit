import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    discount: 0,
    deliveryCharge: 50,
    total: 0,
  });
  const navigate = useNavigate();

  const DELIVERY_CHARGE = 50;
  const DISCOUNT_PERCENTAGE = 10;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const subtotal = storedCart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
    const discount = (subtotal * DISCOUNT_PERCENTAGE) / 100;
    const total = subtotal - discount + DELIVERY_CHARGE;

    setOrderSummary({
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      deliveryCharge: DELIVERY_CHARGE.toFixed(2),
      total: total.toFixed(2),
    });
  }, []);

  const handlePlaceOrder = () => {
    localStorage.removeItem("cart");

    const event = new CustomEvent("cartUpdated");
    window.dispatchEvent(event);

    navigate("/order-confirmation");
  };

  return (
    <div className="bg-green-100/50 p-6 min-h-screen text-black">
      <h1 className="text-3xl mb-6">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="mb-6">
            <h2 className="text-2xl mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 p-4 border border-gray-700 rounded-lg"
              >
                <div className="">
                  <h2 className="text-xl">{item.name}</h2>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Subtotal: ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                  <p>Color: {item.selectedColor}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-col mt-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-xl">Subtotal:</span>
                <span className="text-xl">₹{orderSummary.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xl">
                  Discount ({DISCOUNT_PERCENTAGE}%):
                </span>
                <span className="text-xl">-₹{orderSummary.discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xl">Delivery Charge:</span>
                <span className="text-xl">₹{orderSummary.deliveryCharge}</span>
              </div>
              <div className="flex justify-between font-bold text-2xl">
                <span>Total:</span>
                <span>₹{orderSummary.total}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl mb-4">Shipping Information</h2>
            <input
              type="text"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              placeholder="Enter your shipping address"
              className="w-full p-3 border border-black/50 rounded bg-white text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-2xl mb-4">Payment Method</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-3 border border-black/50 rounded bg-white text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="creditCard">Credit Card</option>
              <option value="paytm">Paytm</option>
              <option value="cashOnDel">Cash On Delivery</option>
              <option value="oth">Others</option>
            </select>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-500"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
