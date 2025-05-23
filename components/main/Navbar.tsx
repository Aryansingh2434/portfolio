import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <div className="relative w-[50px] h-[50px] overflow-hidden rounded-full border-2 border-purple-500">
            <Image
              src="/profile-logo.png"
              alt="Aryan Singh"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>

          <span className="font-bold ml-[10px] hidden md:block text-gray-300 hover:text-purple-500 transition-colors">
            ARYAN SINGH
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-purple-500 transition-colors">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-purple-500 transition-colors">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-purple-500 transition-colors">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
