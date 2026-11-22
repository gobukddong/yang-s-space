"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gobukddang@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-24 flex flex-col items-center justify-between border-t border-neutral-300 pt-8 pb-8 text-neutral-600 md:flex-row">
      <div className="mb-4 md:mb-0 text-left">
        <p className="text-sm">© {new Date().getFullYear()} Yang&apos;s Portfolio. All rights reserved.</p>
        <div className="mt-6 space-y-1.5">
          <p className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-transparent bg-clip-text bg-[linear-gradient(to_right,#ff00ff,#00ffff,#ffff00,#00ff00)] drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]">Special Thanks</p>
          <p className="text-[12px] font-sans font-medium text-neutral-600">
            UI/UX Design & Responsive Web QA : <span className="text-neutral-900">jinjoo</span>
          </p>
          <p className="text-[12px] font-sans font-medium text-neutral-600">
            Video Design Review : <span className="text-neutral-900">jeongyun</span>
          </p>
        </div>
      </div>
      
      <div className="flex gap-8">
        <a 
          href="https://instagram.com/yun_61114" 
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 transition-colors hover:text-neutral-950"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 p-2 transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-yellow-500 group-hover:via-red-500 group-hover:to-purple-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" height="18" 
              viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round" 
              className="group-hover:text-white"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </div>
          <span className="text-sm font-medium">Instagram</span>
        </a>
        
        <button 
          onClick={handleCopyEmail}
          className="group flex items-center gap-2 transition-colors hover:text-neutral-950 focus:outline-none"
          title="클릭하여 이메일 주소 복사"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 p-2 transition-all duration-300 group-hover:bg-blue-600">
            <Mail size={18} className={`transition-colors ${copied ? "text-white" : "group-hover:text-white"}`} />
          </div>
          <span className={`text-sm font-medium transition-colors ${copied ? "text-blue-400" : ""}`}>
            {copied ? "복사됨!" : "Email"}
          </span>
        </button>
      </div>
    </footer>
  );
}
