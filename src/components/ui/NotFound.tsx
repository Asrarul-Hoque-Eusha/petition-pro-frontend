import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 text-gray-900 px-6">
      <div className="text-center animate-fade-in p-12 border border-blue-300 rounded-2xl bg-blue-100">
        <div className="text-8xl mb-4">🚫</div>
        <h1 className="text-6xl font-extrabold mb-2 tracking-wide drop-shadow-lg">404</h1>
        <p className="text-2xl mb-6 font-medium">Oops! The page you're looking for doesn’t exist.</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          🚀 Take Me Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
