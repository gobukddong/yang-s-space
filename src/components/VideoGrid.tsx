"use client";

import { useState } from "react";
import { Project, projects } from "@/data/projects";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

export default function VideoGrid({ isBlackHoleActive = false }: { isBlackHoleActive?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Short delay to allow exit animation before clearing data
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <VideoCard 
            key={project.id} 
            project={project} 
            index={index}
            onClick={handleOpenModal} 
            priority={index < 4}
            isBlackHoleActive={isBlackHoleActive}
          />
        ))}
      </div>
      <VideoModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}
