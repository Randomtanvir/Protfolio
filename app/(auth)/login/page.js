"use client";

import React from "react";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-emerald-500 flex items-center justify-center p-5 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl min-h-[600px] relative">
        {/* Header with Logo */}
        <div className="bg-gradient-to-r from-gray-200 to-gray-100 p-8 text-center border-b border-gray-200">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-1">
              <div
                className="w-5 h-5 rounded-full bg-red-500 animate-pop"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-5 h-5 rounded-full bg-emerald-500 animate-pop -ml-2"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-5 h-5 rounded-full bg-blue-500 animate-pop -ml-2"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="w-5 h-5 rounded-full bg-yellow-400 animate-pop -ml-2"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
          </div>

          <div className="text-sm font-semibold text-gray-500 tracking-[2px]">
            Login to access your admin dashboard
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left Side - Illustration */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <div className="absolute bottom-[25%] left-[20%] w-1 h-1 rounded-full bg-amber-500"></div>
            <div className="absolute top-[15%] left-[25%] text-xl text-yellow-400">
              ✦
            </div>

            {/* Main Illustration */}
            <div className="relative z-10">
              {/* Dashed Circle */}
              <div className="w-50 h-50 animate-pulse border-2 border-dashed border-gray-300 rounded-full absolute -top-12 -left-12 z-0"></div>

              {/* Computer Monitor */}
              <div className="w-40 h-25 bg-gradient-to-br animate-pulse duration-initial from-gray-100 to-gray-200 rounded-lg border-4 border-purple-500 relative z-20">
                {/* Screen Content */}
                <div className="p-3 h-full flex flex-col">
                  {/* User Avatar */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 mx-auto mb-2 relative">
                    {/* Lock Icon */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded flex items-center justify-center text-xs">
                      🔒
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-emerald-500 rounded-sm mt-auto"></div>
                </div>
              </div>

              {/* Monitor Stand */}
              <div className="w-10 h-5 bg-gray-700 mx-auto rounded-b-lg"></div>

              {/* Security Shield */}
              <div
                className="absolute -top-5 -right-8 w-12 h-15 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-xl z-30"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                ✓
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <div className="text-center mb-10">
              <div className="w-10 h-1 bg-purple-500 mx-auto mb-4 rounded-sm"></div>
              <h1 className="text-2xl font-semibold text-gray-700">
                Login as a Admin User
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-black p-4 pr-12 border-2 border-gray-200 rounded-xl text-base outline-none transition-colors focus:border-purple-500"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                  👤
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-black p-4 pr-12 border-2 border-gray-200 rounded-xl text-base outline-none transition-colors focus:border-purple-500"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                  🔒
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white border-none rounded-xl text-base font-semibold tracking-[2px] cursor-pointer transition-transform hover:-translate-y-0.5 mt-2"
              >
                L O G I N
              </button>
            </form>

            {/* Links */}
            <div className="text-center mt-8 flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-500 no-underline text-sm hover:text-gray-700"
              >
                Forget your password?
              </a>
              <a
                href="#"
                className="text-purple-500 no-underline text-sm hover:text-purple-700"
              >
                Get help Signed in.
              </a>
            </div>

            {/* Footer */}
            <div className="text-center mt-10 text-xs text-gray-400">
              <a
                href="#"
                className="text-gray-400 no-underline hover:text-gray-600"
              >
                Terms of use
              </a>
              <span className="mx-2">•</span>
              <a
                href="#"
                className="text-gray-400 no-underline hover:text-gray-600"
              >
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
