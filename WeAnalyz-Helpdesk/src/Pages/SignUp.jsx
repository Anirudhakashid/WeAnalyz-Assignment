import React from "react";

function SignUp() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#55D6C2]">
        <div className="bg-[#A4E2D8] w-[500px] p-10 rounded-md shadow-md">
          <div>
            <h2 className="text-center text-3xl font-semibold italic mb-2 text-black">
              Helpdesk System
            </h2>
            <p className="text-center text-black mb-8">Sign up here</p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                className="p-2 border border-gray-400 bg-white rounded text-black placeholder-gray-600"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 border border-gray-400 bg-white rounded text-black placeholder-gray-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-gray-400 bg-white rounded text-black placeholder-gray-600"
              />
              <button
                type="submit"
                className="bg-blue-500 self-center text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition mt-2"
              >
                Sign Up
              </button>
            </form>

            <div className="flex justify-between mt-6 text-sm">
              <a
                href="/forget-password"
                className="text-red-500 hover:underline"
              >
                Forgot password
              </a>
              <a href="/" className="text-black hover:underline">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
