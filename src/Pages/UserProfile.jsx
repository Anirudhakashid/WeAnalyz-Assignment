import React from "react";

const UserProfile = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">User Profile</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
          <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <p>
              <strong>Username</strong>
            </p>
            <p>Contact Number</p>
            <p>Email</p>
            <p>Department</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Give Your Feedback</h3>
          <p className="text-gray-500 mb-4">[Lorem ipsum]</p>

          <div className="flex justify-center mb-4 text-2xl text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i}>☆</span>
              ))}
          </div>

          <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
