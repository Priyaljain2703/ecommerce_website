
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1c398e] text-white py-6 px-6 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        

        <div className="mb-4 ">
          <p className='font-semibold text-xl mb-2'>Filters</p>
          <p className="text-md text-[#e1e1e1]">All | #123ProNk</p>
          <p className="text-center text-md mt-4 text-[#fff]">© 2024 American</p>
        </div>

       
        <div className="mb-4  text-start">
          <p className="font-semibold text-xl mb-2">About Us</p>
          <p className="text-md text-[#e1e1e1] my-1 ">About Us </p>
          <p className="text-md text-[#e1e1e1]"> Contact</p>
        </div>

     
        <div className='mb-4  text-start '>
          <p className="font-semibold text-xl mb-3">Follow Us</p>
          <div className="flex gap-4 mt-2">


            <FaFacebookF className=" cursor-pointer rounded-full border-0 bg-[#005EB9] p-2" size={36} />
            <FaTwitter className=" cursor-pointer rounded-full border-0 bg-[#005EB9] p-2" size={36} />
            <FaInstagram className="cursor-pointer rounded-full border-0 bg-[#005EB9] p-2" size={36} />
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
