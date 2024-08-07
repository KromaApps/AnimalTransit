import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [isAccountPublic, setIsAccountPublic] = useState(true);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Privacy settings saved:", {
      isAccountPublic,
    });
    alert("Privacy settings updated successfully!");
  };

  return (
    <div className="privacy-page min-h-screen flex items-center justify-center bg-green-100/50">
      <div className="bg-[#c1f0c1] shadow-lg rounded-lg p-8 max-w-md w-full text-black">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Privacy Policy
        </h2>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
