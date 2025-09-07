"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.back()}
        href="/dashboard"
        className="bg-purple-600 z-20 px-4 py-2 cursor-pointer rounded text-white absolute top-4 left-4 hover:bg-purple-700 transition"
      >
        <ChevronLeft className="text-gray-100" />
      </button>
    </div>
  );
};

export default BackButton;
