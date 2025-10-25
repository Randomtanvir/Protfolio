"use client";
import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/admin-login" })}
      className="bg-gradient-to-r w-full from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white p-2 rounded-lg cursor-pointer"
    >
      Logout
    </button>
  );
};

export default Logout;
