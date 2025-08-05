import React, { useState } from "react";
import { authAPI } from "../../services/api";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await authAPI.login({
        username,
        password,
      });

      console.log("Login successful:", response.data);
      // Store tokens and user info
      if (response.data.access_token) {
        localStorage.setItem("access_token", response.data.access_token);
      }
      if (response.data.refresh_token) {
        localStorage.setItem("refresh_token", response.data.refresh_token);
      }
      if (response.data.user_info) {
        localStorage.setItem("user_info", JSON.stringify(response.data.user_info));
      }
      // Redirect to user portal or dashboard
      window.location.href = "/user-portal";
    } catch (error: any) {
      console.error("Login failed:", error);
      setError(
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-700">Welcome Back</h2>
        <p className="text-center text-sm text-gray-500">Please login to your account</p>

        {error && (
          <div className="p-3 text-red-700 bg-red-100 border border-red-300 rounded-lg">
            {error}
          </div>
        )}

        <div className="text-center mb-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-colors mb-2"
            onClick={() => window.location.href = '/'}
          >
            PetitionPro
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
