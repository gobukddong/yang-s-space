"use client";

import { documents } from "@/data/documents";
import DocumentCard from "./DocumentCard";

export default function DocumentGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {documents.map((doc) => (
        <DocumentCard 
          key={doc.id} 
          document={doc} 
        />
      ))}
    </div>
  );
}
