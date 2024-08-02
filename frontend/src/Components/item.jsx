import React, { useState, useEffect } from "react";
import petAnimals from "../services/api";

const ProductCard = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(item.colors[0]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
      existingItem.selectedColor = selectedColor;
    } else {
      cart.push({ ...item, quantity: 1, selectedColor });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-r from-green-300/50 to-green-500 border border-white rounded-lg shadow-lg dark:bg-white dark:border-white">
      <h2 className="mb-4 text-3xl font-extrabold text-black dark:text-black">
        {item.name}
      </h2>
      <div className="relative mb-4 w-56 h-56">
        <img
          src={item.images[currentIndex]}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg shadow-md transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            className="bg-white rounded-full p-2 shadow-md hover:bg-white focus:outline-none"
            onClick={handlePrevClick}
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="bg-white rounded-full p-2 shadow-md hover:bg-white focus:outline-none"
            onClick={handleNextClick}
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="mb-2 text-xl font-semibold text-black dark:text-black">
        Price:{" "}
        <span className="font-bold text-black dark:text-black">
          ₹{item.price}
        </span>
      </p>
      <p className="mb-4 text-black dark:text-black">
        Description: {item.description}
      </p>
      <p className="mb-2 text-black dark:text-black">
        Breed:{" "}
        <span className="font-semibold text-black dark:text-black">
          {item.breed}
        </span>
      </p>
      <p className="mb-2 text-black dark:text-black">
        Age:{" "}
        <span className="font-semibold text-black dark:text-black">
          {item.age}
        </span>
      </p>
      <p className="mb-2 text-black dark:text-black">
        Gender:{" "}
        <span className="font-semibold text-black dark:text-black">
          {item.gender}
        </span>
      </p>
      <p className="mb-2 text-black dark:text-black">
        Vaccinations:{" "}
        <span className="font-semibold text-black dark:text-black">
          {item.vaccinations.join(", ")}
        </span>
      </p>
      <p className="mb-2 text-black dark:text-black">
        Stock:{" "}
        <span className="font-semibold text-black dark:text-black">
          {item.stock}
        </span>
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-black dark:text-black">
          Available Colors:
        </h3>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {item.colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        className="mt-4 px-6 py-2 text-black bg-white rounded-lg hover:bg-white focus:ring-4 focus:ring-white dark:bg-white dark:hover:bg-white dark:focus:ring-white"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(petAnimals);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Item;
