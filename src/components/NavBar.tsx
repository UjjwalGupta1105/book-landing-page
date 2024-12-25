import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faQuestionCircle, faBars } from '@fortawesome/free-solid-svg-icons';
// import { faBook, faHome} from '@fortawesome/free-solid-svg-icons';

import '../styles/NavBar.css';
import logo from  "../assets/logoSite.png"

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolling(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolling ? 'backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* <a href="/" className="text-white text-2xl font-bold hover:text-indigo-400">
              MoneyMafia
            </a> */}
            <a href="/" className="text-white text-2xl font-bold hover:text-indigo-400 mt-3"><img src={logo} alt="OUTCHASE" /></a>
          </div>

          {/* Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>

          {/* Nav Links - Desktop View */}
          <div className="md:flex space-x-8 DesktopNav">
            {/* <a href="/" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-lg font-medium">
              Home
            </a> */}
            <a href="#about" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-lg font-medium">
              About Us
            </a>
            {/* <a href="#characters" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-lg font-medium">
              Characters
            </a> */}
            <a href="#faq" className="text-gray-300 hover:text-indigo-400 px-3 py-2 text-lg font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          {/* <a href="/" className="block text-gray-300 hover:text-indigo-400 px-4 py-2 text-lg font-medium">
            <FontAwesomeIcon icon={faHome} /> Home
          </a> */}
          <a href="#about" className="block text-gray-300 hover:text-indigo-400 px-4 py-2 text-lg font-medium">
            <FontAwesomeIcon icon={faUsers} /> About Us
          </a>
          {/* <a href="#characters" className="block text-gray-300 hover:text-indigo-400 px-4 py-2 text-lg font-medium">
            <FontAwesomeIcon icon={faBook} /> Characters
          </a> */}
          <a href="#faq" className="block text-gray-300 hover:text-indigo-400 px-4 py-2 text-lg font-medium">
            <FontAwesomeIcon icon={faQuestionCircle} /> Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
