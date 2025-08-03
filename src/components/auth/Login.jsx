import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-[#1e1e1e] shadow-2xl rounded-2xl p-10 w-[400px] border border-emerald-500">
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">
          Login
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <div className="flex items-center border-2 border-emerald-600 rounded-full px-5 py-2 focus-within:ring-2 focus-within:ring-emerald-400 transition duration-200">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center border-2 border-emerald-600 rounded-full px-5 py-2 focus-within:ring-2 focus-within:ring-emerald-400 transition duration-200">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="mt-3 bg-emerald-600 hover:bg-emerald-700 transition-all text-lg font-semibold py-2 rounded-full"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
