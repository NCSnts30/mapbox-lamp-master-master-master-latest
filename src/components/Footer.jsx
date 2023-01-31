import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full mb-6 text-center">
          <a href="#twitter" className="text-white hover:text-gray-400 mr-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#facebook" className="text-white hover:text-gray-400 mr-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#instagram" className="text-white hover:text-gray-400 mr-4">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div className="w-full text-center">
          <a href="#dashboard" className="text-white hover:text-gray-400 mr-4">
            Dashboard
          </a>
          <a href="#contactus" className="text-white hover:text-gray-400 mr-4">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
