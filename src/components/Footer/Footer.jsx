import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start w-8/12">
        {/* Contact Us Section */}
        <div className="mb-6 md:mb-0 md:text-left w-52">
          <h4 className="text-3xl font-semibold mb-4 text-center font-fontFooter">Contact Us</h4>
          <p className="mb-2 text-center font-fontFooter1">Location</p>
          <p className="mb-2 text-center font-fontFooter1"> Call +01 1234567890</p>
          <p className="text-center font-fontFooter1">demo@gmail.com</p>
        </div>

        {/* Feane Section */}
        <div className="mb-6 md:mb-0 text-center  w-96 font-fontFooter1">
          <h4 className="text-3xl font-semibold mb-4 text-center font-fontFooter">Feane</h4>
          <p className="mb-4 text-center">Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with...</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="">
              <img src="public\assets\footer\facebook.png" alt="Facebook" className="w-8 h-8 bg-white rounded-2xl" />
            </a>
            <a href="#" className="text-white">
              <img src="public\assets\footer\twitter.png" alt="Twitter" className="w-8 h-8 bg-white rounded-2xl" />
            </a>
            <a href="#" className="text-white">
              <img src="public\assets\footer\linkedin.png" alt="LinkedIn" className="w-8 h-8 bg-white rounded-2xl" />
            </a>
            <a href="#" className="text-white">
              <img src="public\assets\footer\instagram.png" alt="Instagram" className="w-8 h-8 bg-white rounded-2xl" />
            </a>
            {/* <a href="#" className="text-white">
              <img src={pinterestLogo} alt="Pinterest" className="w-6 h-6" />
            </a> */}
          </div>
        </div>

        {/* Opening Hours Section */}
        <div className="text-center md:text-right w-52 font-fontFooter1">
          <h4 className="text-2xl font-semibold mb-4 text-center font-fontFooter">Opening Hours</h4>
          <p className="mb-2 text-center">Everyday</p>
          <p className="text-center">10.00 Am -10.00 Pm</p>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-800 pt-4 font-fontFooter1">
        <p>© 2024 All Rights Reserved By Free Html Templates</p>
        <p>© Distributed By ThemeWagon</p>
      </div>
    </footer>
  );
}

export default Footer;
