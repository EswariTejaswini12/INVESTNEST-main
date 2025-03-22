import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginwithgoogle = () => {
    // Redirect to Google OAuth endpoint
    window.open("http://localhost:6005/auth/google/callback", "_self");
  };

  const handleManualLogin = (e) => {
    e.preventDefault();

    // Email validation regex for .gmail.com
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email || !emailPattern.test(email)) {
      setError("Please enter a valid Gmail address (e.g., example@gmail.com).");
      return;
    }

    // Password validation regex
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordPattern)) {
      setError(
        "Password must be at least 8 characters long, and include uppercase, lowercase, a number, and a special character."
      );
      return;
    }

    // Clear error and proceed with manual login logic
    setError("");
    console.log("Manual login successful with valid credentials.");
    // Store email in local storage
    localStorage.setItem("userEmail", email);
    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-lg bg-gray-100 bg-opacity-50">
        <h1 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Login</h1>

        {error && (
          <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-500 rounded">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleManualLogin}>
          <input
            type="text"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 text-sm font-bold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm my-4 inline-block w-full">
          or continue with
          <span className="block w-1/3 border-b border-gray-300 mt-1 mx-auto"></span>
        </p>

        <button
          className="relative flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={loginwithgoogle}
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNC0xMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
            alt="Google"
            className="absolute left-4 w-5 h-5"
          />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;