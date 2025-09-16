import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaQuestionCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent px-4 sm:px-0 fixed top-0 left-0 right-0 z-50">
      <div className="container bg-blue-500 rounded-xl mx-auto  px-4 py-3 sm:py-4 mt-4 sm:mt-6">
        <nav className="flex justify-between items-center">
          <div>
            <p className="text-white font-bold text-lg sm:text-xl drop-shadow-lg">
              Quiz Nabi
            </p>
          </div>

          {/* Hamburger button for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none drop-shadow-lg p-2"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-blue-200 font-medium transition-colors drop-shadow-lg"
            >
              <FaHome size={16} />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 text-white hover:text-blue-200 font-medium transition-colors drop-shadow-lg"
            >
              <FaInfoCircle size={16} />
              <span>About</span>
            </Link>
            <Link
              to="/quiz/instructions"
              className="flex items-center space-x-2 text-white hover:text-blue-200 font-medium transition-colors drop-shadow-lg"
            >
              <FaQuestionCircle size={16} />
              <span>Quiz</span>
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/80 backdrop-blur-md p-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome size={18} />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaInfoCircle size={18} />
                <span>About</span>
              </Link>
              <Link
                to="/quiz/instructions"
                className="flex items-center space-x-3 text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaQuestionCircle size={18} />
                <span>Quiz</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
