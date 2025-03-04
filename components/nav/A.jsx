import Link from "next/link";
import React from "react";

const A = ({ href, title, children }) => {
  return (
    <Link
      href={href}
      title={title}
      className="w-10 h-10 text-white rounded-full flex items-center justify-center hover:bg-indigo-600 transition"
    >
      {children}
    </Link>
  );
};

export default A;
