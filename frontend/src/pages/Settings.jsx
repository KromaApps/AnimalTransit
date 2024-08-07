import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const handleDeleteAccount = () => {
    console.log("Account deleted");
  };

  return (
    <div className="settings-page min-h-screen flex items-center justify-center bg-green-100">
      <div className="shadow-lg rounded-lg p-8 max-w-md w-full bg-white text-black">
        <h2 className="text-3xl font-semibold mb-4">Settings</h2>
        <p className="mb-6">Manage your account and preferences.</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <i className="fas fa-user-edit mr-2"></i>Profile
            </span>
            <Link
              to="/profile"
              className="text-gray-400 hover:text-gray-600 font-medium flex items-center"
            >
              <i className="fas fa-cog mr-2"></i>Manage your profile
            </Link>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <i className="fas fa-bell mr-2"></i>Notifications
            </span>
            <Link
              to="/notifications"
              className="text-gray-400 hover:text-gray-600 font-medium flex items-center"
            >
              <i className="fas fa-cog mr-2"></i>Manage notifications
            </Link>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <i className="fas fa-user-shield mr-2"></i>Privacy Policy
            </span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-gray-600 font-medium flex items-center"
            >
              <i className="fas fa-cog mr-2"></i>Read Our Privacy Policy
            </Link>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <i className="fas fa-key mr-2"></i>Change Password
            </span>
            <Link
              to="/change-password"
              className="text-gray-400 hover:text-gray-600 font-medium flex items-center"
            >
              <i className="fas fa-cog mr-2"></i>Change Password
            </Link>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-center justify-between">
            <span className="text-red-600 flex items-center">
              <i className="fas fa-trash-alt mr-2"></i>Delete Account
            </span>
            <button
              onClick={handleDeleteAccount}
              className="text-red-600 hover:text-red-400 font-medium flex items-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
