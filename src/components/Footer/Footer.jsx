import React from 'react';
import GoogleLogo from '../../assets/image/google-play.png';
import IosLogo from '../../assets/image/ios_app_icon.png';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center lg:flex-row flex-col">
        {/* Logo Section 1 */}
        <div className="flex items-center">
          <span className="text-lg font-semibold px-2">DBNEWS71</span>
        </div>

        {/* Logo Section 2 (Optional) */}
        <div className="flex items-center lg:mt-0 mt-3">
          <div>
          <img src={GoogleLogo} alt="Logo" className="h-10 w-auto mr-3" />
          </div> <br />
       <div>
       <img src={IosLogo} alt="Logo" className="h-10 w-auto mr-3" />
       </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm">Your source for the latest news.</p>
        <p className="text-sm">© {new Date().getFullYear()} DBNEWS71. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
