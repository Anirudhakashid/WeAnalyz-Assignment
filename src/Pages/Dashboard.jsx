import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded text-center shadow">
          <p>Total Tickets</p>
          <h1 className="text-3xl font-bold">12</h1>
        </div>
        <div className="bg-green-500 text-white p-4 rounded text-center shadow">
          <p>Total Solved</p>
          <h1 className="text-3xl font-bold">8</h1>
        </div>
        <div className="bg-red-500 text-white p-4 rounded text-center shadow">
          <p>Total Awaiting Approval</p>
          <h1 className="text-3xl font-bold">2</h1>
        </div>
        <div className="bg-yellow-400 text-white p-4 rounded text-center shadow">
          <p>Total in Progress</p>
          <h1 className="text-3xl font-bold">2</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
