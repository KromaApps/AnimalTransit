import React, { useState } from "react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirmation do not match");
      return;
    }
    console.log("Password changed successfully");
  };

  return (
    <div className="change-password-page min-h-screen flex items-center justify-center bg-green-100/50">
      <div className="bg-[#c1f0c1] shadow-lg rounded-lg p-8 max-w-md w-full text-black">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Change Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current Password"
              className="w-full p-2 mt-1 rounded bg-white text-black placeholder:text-slate-400"
              required
            />
          </div>
          <div>
            <label className="block text-black">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="w-full p-2 mt-1 rounded bg-white text-black placeholder:text-slate-400"
              required
            />
          </div>
          <div>
            <label className="block text-black">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              className="w-full p-2 mt-1 rounded bg-white text-black placeholder:text-slate-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 rounded  text-white bg-green-600 hover:bg-green-700"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
