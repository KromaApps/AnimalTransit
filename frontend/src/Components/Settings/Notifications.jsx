import React, { useState } from "react";

const Notifications = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Notification settings saved:", {
      emailNotifications,
      smsNotifications,
      pushNotifications,
    });
    alert("Notification settings updated successfully!");
  };

  return (
    <div className="notifications-page min-h-screen flex items-center justify-center bg-green-100/50">
      <div className="bg-[#c1f0c1] shadow-lg rounded-lg p-8 max-w-md w-full text-white">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Notifications
        </h2>
        <p className="mb-6 text-black">Manage your notification settings.</p>
        <form onSubmit={handleSaveChanges} className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-black">Email Notifications</label>
            <button
              type="button"
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`${
                emailNotifications ? "bg-green-600" : "bg-gray-600"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  emailNotifications ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-black">SMS Notifications</label>
            <button
              type="button"
              onClick={() => setSmsNotifications(!smsNotifications)}
              className={`${
                smsNotifications ? "bg-green-600" : "bg-gray-600"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  smsNotifications ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="text-black">Push Notifications</label>
            <button
              type="button"
              onClick={() => setPushNotifications(!pushNotifications)}
              className={`${
                pushNotifications ? "bg-green-600" : "bg-gray-600"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  pushNotifications ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
              />
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-4 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Notifications;
