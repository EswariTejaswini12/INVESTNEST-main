import React, { useEffect, useState } from 'react';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import axios from "axios";

const NavLinks = () => {
  const [userdata, setUserdata] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6005/login/success", { withCredentials: true });
      console.log("User data received in frontend:", response.data.user); // Debugging log
      setUserdata(response.data.user);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  const logout = () => {
    window.open("http://localhost:6005/logout", "_self");
    setUserdata(null); // Clear user data on logout
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex space-x-4">
        <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
          About
        </HashLink>
        <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#blogs">
          Blogs
        </HashLink>
        <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#footer">
          Services
        </HashLink>
        <Link to="/join-us" className="px-4 font-extrabold text-gray-500 hover:text-blue-900">
          Join Us
        </Link>
      </div>

      {userdata ? (
        <div className="relative flex items-center ml-4 group">
          <img
            src={userdata.image}
            alt="User"
            style={{ width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" }}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/40"; }} // Fallback image
          />
          <div className="flex flex-col items-start ml-2">
            <span className="text-gray-500 font-extrabold">{userdata.email}</span>
            <button
            onClick={logout}
            className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-400 text-white px-4 py-2 rounded-md shadow-md"
            style={{ position: "absolute", top: "100%", left: "0", transform: "translateY(10px)" }}
          >
            Logout
          </button>

          </div>
        </div>
      ) : (
        <Link to="/login" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl ml-4">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavLinks;