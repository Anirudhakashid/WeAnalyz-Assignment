import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("user");
  const [Password, setPassword] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Username === "user" && Password === "user") {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#55D6C2]">
      <div className="bg-[#A4E2D8] w-[500px] p-10 rounded-md shadow-md">
        <div>
          <h2 className="text-center text-3xl font-semibold italic mb-8">
            Helpdesk System
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="px-4  py-2 border border-gray-300 bg-white rounded"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="px-4 py-2 border border-gray-300 bg-white rounded"
            />
            <button
              type="submit"
              className="bg-[#00CC17] self-center text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm">
            <a href="/forget-password" className="text-red-500 hover:underline">
              Forgot password
            </a>
            <a href="/signup" className="text-black hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
