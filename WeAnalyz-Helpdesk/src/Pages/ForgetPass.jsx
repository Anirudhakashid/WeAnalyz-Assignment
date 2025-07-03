import React from "react";

function ForgetPass() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#55D6C2]">
      <div className="bg-[#A4E2D8] w-[500px] p-10 rounded-md shadow-md">
        <div>
          <h2 className="text-center mb-8">
            Don't worry, Enter your email below and we will send you a link to
            change your password.
          </h2>

          <form className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              className="px-4  py-2 border border-gray-300 bg-white rounded"
            />
            <button
              type="submit"
              className="bg-[#00CC17] self-center text-white px-16 py-2 rounded-lg hover:bg-green-600 cursor-pointer transition"
            >
              Submit
            </button>
            <button
              type="submit"
              className="bg-[#0569DC]  self-center text-white px-16 py-2 rounded-lg hover:bg-blue-600 cursor-pointer transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
