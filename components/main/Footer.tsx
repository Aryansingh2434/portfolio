import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { HiDocumentDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0E1016] text-gray-200 py-12">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Connect Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://github.com/aryansingh2434" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:translate-x-2 transition-all duration-300 hover:text-purple-500"
              >
                <RxGithubLogo className="text-2xl" />
                <span className="text-sm">GitHub</span>    
              </a>
              <a 
                href="https://www.linkedin.com/in/aryan-singh-a87966298/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:translate-x-2 transition-all duration-300 hover:text-purple-500"
              >
                <RxLinkedinLogo className="text-2xl" />
                <span className="text-sm">LinkedIn</span>    
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Contact
            </h3>
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-purple-500 transition-colors">
                <MdEmail className="text-xl" />
                <span className="text-sm">chauhanaryan011@gmail.com</span>
              </div>
              <a 
                href="https://drive.google.com/file/d/1ZHOG4R6dIpUT_Xz5Jok6HZbqTZLuf8dh/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <HiDocumentDownload className="text-xl" />
                <span className="text-sm font-semibold">Download Resume</span>
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Education
            </h3>
            <div className="flex flex-col items-center md:items-end space-y-3">
              <div className="flex items-center space-x-2">
                <FaGraduationCap className="text-2xl text-purple-500" />
                <span className="text-sm font-medium">IIIT Nagpur</span>
              </div>
              <p className="text-sm text-gray-400">B.Tech in Computer Science</p>
              <p className="text-sm text-gray-400">2022 - 2026</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Aryan Singh. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
    </footer>
  );
};

export default Footer;