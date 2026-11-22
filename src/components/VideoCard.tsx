"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

interface VideoCardProps {
  project: Project;
  onClick: (project: Project) => void;
  priority?: boolean;
  isBlackHoleActive?: boolean;
  index: number;
}

export default function VideoCard({ project, onClick, priority = false, isBlackHoleActive = false, index }: VideoCardProps) {
  return (
    <motion.div
      className="relative w-full overflow-visible"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.12, ease: "easeOut" }}
    >
      {/* Original Card: Hides during event */}
      <motion.button
        type="button"
        disabled={isBlackHoleActive}
        aria-label={`Play video: ${project.title}`}
        className={`group relative block aspect-square w-full cursor-pointer overflow-hidden bg-neutral-200 text-left transition-opacity duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700 ${isBlackHoleActive ? "opacity-0" : "opacity-100"}`}
        whileHover={!isBlackHoleActive ? "hover" : ""}
        onClick={() => !isBlackHoleActive && onClick(project)}
      >
        <motion.div
          variants={{
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority={priority}
            className="object-cover opacity-95 transition-opacity duration-300 group-hover:opacity-70"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            variants={{
              hover: { opacity: 1, scale: 1 },
              initial: { opacity: 0, scale: 0.8 },
            }}
            initial="initial"
            transition={{ duration: 0.2 }}
            className="rounded-full bg-blue-700 p-3 text-white shadow-xl"
          >
            <Play fill="currentColor" size={24} />
          </motion.div>
        </div>
      </motion.button>
      <div className="pt-3">
        <h3 className="text-base font-medium normal-case leading-snug tracking-normal text-neutral-900">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-neutral-600">
          {project.category} <span aria-hidden="true">·</span> {project.description}
        </p>
      </div>

      {/* Sucking Copy */}
      <AnimatePresence>
        {isBlackHoleActive && (
          <motion.div 
            initial={{ scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }}
            animate={{ 
                scale: 0, 
                opacity: 0, 
                x: ((index % 5) - 2) * 60,
                y: 1500 + (index * 100), // Target depth
                rotate: 1080 
            }}
            transition={{ duration: 3.5, ease: "anticipate", delay: index * 0.1 }}
            className="pointer-events-none absolute inset-x-0 top-0 z-50 aspect-square overflow-hidden shadow-2xl"
          >
             <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
             />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
