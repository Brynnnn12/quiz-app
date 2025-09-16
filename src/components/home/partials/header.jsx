import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      {" "}
      {/* Ubah absolute menjadi fixed */}
      <div className="container bg-blue-500 rounded-xl mx-auto px-4 py-4 mt-6">
        <nav className="flex justify-between items-center">
          <div>
            <p className="text-white font-bold text-xl drop-shadow-lg">
              Quiz Nabi
            </p>
          </div>

          {/* Hamburger button for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none drop-shadow-lg"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-blue-200 font-medium transition-colors drop-shadow-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-200 font-medium transition-colors drop-shadow-lg"
            >
              About
            </Link>
            <Link
              to="/quiz/instructions"
              className="text-white hover:text-blue-200 font-medium transition-colors drop-shadow-lg"
            >
              Quiz
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg shadow">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-blue-200 transition-colors"
              >
                About
              </Link>
              <Link
                to="/quiz/instructions"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Quiz
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
