import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import defaultProfileImage from "../assets/profile_picture.webp";

const Profile = () => {
  const initialUser = {
    name: "Afzal Shaikh",
    email: "Afzal@example.com",
    imageUrl: defaultProfileImage,
  };

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : initialUser;
  });

  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem("addresses");
    return savedAddresses
      ? JSON.parse(savedAddresses)
      : [
          { id: 1, address: "123 Main St, City, Country" },
          { id: 2, address: "456 Secondary St, City, Country" },
        ];
  });

  const [newAddress, setNewAddress] = useState("");
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    if (!user.imageUrl) {
      setUser((prevUser) => ({
        ...prevUser,
        imageUrl: defaultProfileImage,
      }));
    }
  }, [user.imageUrl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteProfilePicture = () => {
    const updatedUser = {
      ...user,
      imageUrl: defaultProfileImage,
    };
    setUser(updatedUser);
    setNewImage(null);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const handleAddAddress = () => {
    if (newAddress.trim() !== "") {
      const newAddressObj = { id: addresses.length + 1, address: newAddress };
      const updatedAddresses = [...addresses, newAddressObj];
      setAddresses(updatedAddresses);
      localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
      setNewAddress("");
    }
  };

  const handleRemoveAddress = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      imageUrl: newImage || user.imageUrl,
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page p-6 bg-green-100/50 text-black min-h-screen">
      <div className="max-w-3xl mx-auto bg-[#c1f0c1] p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <img
            className="h-24 w-24 rounded-full"
            src={user.imageUrl}
            alt={user.name}
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-black">{user.email}</p>
          </div>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label className="block text-black">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 rounded bg-white text-black"
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 rounded bg-white text-black"
            />
          </div>
          <div>
            <label className="block ">Profile Picture</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full p-2 mt-1 rounded bg-white "
            />
            {newImage && (
              <img
                className="h-24 w-24 rounded-full mt-4"
                src={newImage}
                alt="New Profile"
              />
            )}
            <button
              type="button"
              onClick={handleDeleteProfilePicture}
              className="w-full p-2 mt-4 rounded bg-red-600 text-white hover:bg-red-700"
            >
              Delete Profile Picture
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Update Profile
          </button>
        </form>
        <div className="mt-6">
          <h2 className="text-xl fontbold">Manage Addresses</h2>
          <div className="space-y-4">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="flex justify-between items-center bg-white p-2 rounded"
              >
                <span>{address.address}</span>
                <button
                  type="button"
                  className="text-red-600 hover:text-red-400"
                  onClick={() => handleRemoveAddress(address.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="w-full p-2 rounded bg-white"
              placeholder="Add new address"
            />
            <button
              type="button"
              className="ml-2 px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md"
              onClick={handleAddAddress}
            >
              Add Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
