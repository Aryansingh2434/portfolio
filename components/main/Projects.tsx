import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/chat-app.png"
          title="Chat Application - MERN Stack"
          description="Real-time chat application with secure JWT authentication, WebSockets integration, and MongoDB for message storage. Features include instant messaging and user profile customization."
          link="https://github.com/aryansingh2434/chatapp"
        />
        <ProjectCard
          src="/scheduler.png"
          title="CFS Scheduler Simulation"
          description="C++ simulation of Linux's Completely Fair Scheduler with runtime-based task prioritization. Implemented CPU-bound and I/O-bound task handling with cross-platform support."
          link="https://github.com/Aryansingh2434/cfs-schedular-cpp"
        />
        <ProjectCard
          src="/job-portal.png"
          title="Job Portal - MERN Stack"
          description="Full-featured job portal with secure authentication, job listings management, and Redux state management. Includes custom hooks and API integration for dynamic job searches."
          link="https://github.com/aryansingh2434/jobportal"
        />
      </div>
    </div>
  );
};

export default Projects;
