import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 py-8 text-center border-t border-gray-800 ">
      <div className="container mx-auto px-6 flex flex-col items-center gap-4">
                <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Varun Gowda R — Building clean and
          impactful web experiences.
        </p>
      </div>
    </footer>
  );
}
