import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/2.jpg";
import BgImage from "./assets/6.jpg";

function Home() {
  return (
    <div
      className="container mx-auto px-4 py-8 min-h-screen"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={Logo}
          alt="Logo"
          className="w-20 h-20"
        />
      </div>

      {/* Title */}
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-4xl font-bold text-red-600">
          National Health Management System
        </h1>

        <h2 className="text-2xl font-semibold text-black">
          We Focus before Health..........
        </h2>

        <p className="text-black italic">
          “Empowering Health, Empowering Life.”
        </p>
      </div>

      {/* Login Button */}
      <div className="flex justify-center">
        <Link to="/homee">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
