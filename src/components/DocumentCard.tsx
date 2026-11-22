"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { DocumentProject } from "@/data/documents";
import Link from "next/link";

interface DocumentCardProps {
  document: DocumentProject;
}

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <Link 
      href={document.externalUrl || `/projects/${document.id}`} 
      className="block h-full outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700"
      {...(document.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <motion.div
        className="group flex h-full min-h-32 flex-col border-t border-neutral-300 pt-4 transition-colors"
        whileHover={{ y: -2 }}
      >
        <span className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs text-neutral-500">{document.category}</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-blue-700">
            {document.summary}
          </span>
        </span>
        <span className="flex items-start justify-between gap-3">
          <span className="text-lg font-medium normal-case leading-snug tracking-normal text-neutral-900 group-hover:text-blue-800">
            {document.title}
          </span>
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="mt-1 shrink-0 text-neutral-500 transition-colors group-hover:text-blue-700"
          />
        </span>
      </motion.div>
    </Link>
  );
}
