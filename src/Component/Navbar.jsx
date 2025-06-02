  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { Menu, X } from "lucide-react";
  import videoLogo from "../assets/videoLogo.png"; 

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="w-full">
        {/* Announcement Bar */}
        <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-center text-sm py-2 px-4">
          <p className="font-medium">
            LAST CHANCE! New Launch Sale Ends Soon!{" "}
            <Link to="/signup" className="underline font-semibold">
              Click here to Sign-up and save 25%
            </Link>
          </p>
        </div>

        {/* Main Nav */}
        <nav className="w-full bg-gradient-to-r from-[#fefcfd] via-white to-[#fefafa] shadow-md">
          <div className="max-w-[90rem] mx-auto flex items-center justify-between px-4 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={videoLogo}
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop Links */}

            <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
              <Link to="/">Features</Link>
              <Link to="#">Use Cases</Link>
              <Link to="pricing">Pricing</Link>
              <Link to="/affiliates">Affiliates</Link>
              <Link to="/contact">Contact Us</Link>
            </div>

            {/* Desktop Buttons */}

            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="#"
                className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
              >
                SignUp
              </Link>
              <Link
                to="#"
                className="border border-indigo-400 text-indigo-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-50 transition"
              >
                Login
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden text-indigo-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white px-4 pb-4 space-y-4">
              <Link to="/" className="block text-gray-800">
                Features
              </Link>
              <Link to="#" className="block text-gray-800">
                Use Cases
              </Link>
              <Link to="pricing" className="block text-gray-800">
                Pricing
              </Link>
              <Link to="/affiliates" className="block text-gray-800">
                Affiliates
              </Link>
              <Link to="/contact" className="block text-gray-800">
                Contact Us
              </Link>
              <Link
                to="#"
                className="block bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold text-center"
              >
                SignUp
              </Link>
              <Link
                to="#"
                className="block border border-indigo-400 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold text-center"
              >
                Login
              </Link>
            </div>
          )}
        </nav>
      </div>
    );
  };

  export default Navbar;
