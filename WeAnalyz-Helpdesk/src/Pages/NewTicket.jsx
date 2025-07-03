import React from "react";

const NewTicket = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Create New Ticket</h2>
      <form className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Ticket No."
          className="p-2 border rounded"
        />
        <input type="date" className="p-2 border rounded" />
        <input type="text" placeholder="Name" className="p-2 border rounded" />
        <input
          type="text"
          placeholder="Department"
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Subject"
          className="col-span-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Category"
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Description"
          className="p-2 border rounded h-32"
        />
        <input type="text" placeholder="Type" className="p-2 border rounded" />
        <input
          type="text"
          placeholder="Priority"
          className="p-2 border rounded"
        />
        <div className="col-span-2 flex items-center gap-2 mt-4">
          <input type="checkbox" />
          <span>I’m not a robot</span>
          <img
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            alt="reCAPTCHA"
            className="h-6"
          />
        </div>
        <button className="col-span-2 bg-teal-400 text-white py-2 rounded hover:bg-teal-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTicket;
