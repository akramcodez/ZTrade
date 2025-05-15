import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 lg:px-[120px] flex items-center justify-between">
      <div className="text-white font-bold text-xl">MyBrand</div>
      <ul className="flex space-x-4 text-gray-300">
        <li>
          <a href="#" className="hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
