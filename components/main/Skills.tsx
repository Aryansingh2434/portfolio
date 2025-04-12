"use client";

import React from "react";
import {
  Backend_skill,
  Frontend_skill,
  Other_skill,
  Skill_data,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import { CodeBracketIcon, TrophyIcon, UserGroupIcon, StarIcon } from "@heroicons/react/24/solid";

const Skills = () => {
  // Add achievements data
  const achievements = [
    {
      icon: <StarIcon className="h-8 w-8 text-yellow-500 animate-pulse" />,
      title: "3⭐ CodeChef",
      stats: "1750",
      subtitle: "Competitive Programmer",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <TrophyIcon className="h-8 w-8 text-purple-500" />,
      title: "ISRO IISF",
      stats: "2nd",
      subtitle: "Hackathon Runner-up",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <CodeBracketIcon className="h-8 w-8 text-green-500" />,
      title: "LeetCode + GFG",
      stats: "500+",
      subtitle: "Problems Solved",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-blue-500" />,
      title: "Web Dev Team",
      stats: " Co-Lead",
      subtitle: "Project Management",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>

      <SkillText />

      {/* Achievements Section */}
      <div className="w-full max-w-[1400px] px-4 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500">
            Achievements & Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70" />
              <div className="relative flex flex-col items-center p-6 rounded-xl border border-[#7042f88b] bg-[#0300145e] backdrop-blur-sm group-hover:bg-[#0300147e] transition-all duration-300">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}>
                  {item.title}
                </h3>
                <div className="text-3xl font-bold text-white mb-2">{item.stats}</div>
                <p className="text-gray-400 text-sm">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-col items-center justify-center gap-12 mt-4">
        {/* Main Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
            Core Technologies
          </h2>
          <div className="flex flex-row justify-around flex-wrap gap-8 items-center max-w-[900px]">
            {Skill_data.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70 animate-pulse"></div>
                  <SkillDataProvider
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                </div>
                <span className={`${image.color} font-medium text-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}>
                  {image.skill_name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
            Frontend Mastery
          </h2>
          <div className="flex flex-row justify-around flex-wrap gap-8 items-center max-w-[900px]">
            {Frontend_skill.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70 animate-pulse"></div>
                  <SkillDataProvider
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                </div>
                <span className={`${image.color} font-medium text-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}>
                  {image.skill_name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
            Backend Excellence
          </h2>
          <div className="flex flex-row justify-around flex-wrap gap-8 items-center max-w-[900px]">
            {Backend_skill.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70 animate-pulse"></div>
                  <SkillDataProvider
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                </div>
                <span className={`${image.color} font-medium text-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}>
                  {image.skill_name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
            Development Tools
          </h2>
          <div className="flex flex-row justify-around flex-wrap gap-8 items-center max-w-[900px]">
            {Other_skill.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70 animate-pulse"></div>
                  <SkillDataProvider
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                </div>
                <span className={`${image.color} font-medium text-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap`}>
                  {image.skill_name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
