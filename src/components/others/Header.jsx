import React from "react";

const Header = ({ changeUser, firstName }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  // Generate initials from firstName
  const initials = firstName ? firstName[0].toUpperCase() : "?";

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <p className="text-sm">Welcome back,</p>
          <h1 className="text-2xl font-semibold">{firstName || "User"} 👋</h1>
        </div>
      </div>

      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition duration-300"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
