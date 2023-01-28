import React from 'react';

function Footer() {
  return (
    <div className="h-40 bg-slate-700">
      <div className="bg-gray-800 text-white p-4">
        <div className="container-mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm"> Voltaic V</p>
            <div className="flex items-center">
              <a href="www.twitter.com" className="text-white mr-4">
                <i className="fab fa-twitter" />
              </a>
              <a href="www.facebook.com" className="text-white mr-4">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="www.instagram.com" className="text-white">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
