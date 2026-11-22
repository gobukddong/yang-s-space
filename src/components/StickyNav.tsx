"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function StickyNav() {
  const pathname = usePathname();
  const editorialPaths = ["/", "/videos", "/projects", "/activities", "/certifications", "/tech"];
  const isEditorialPage = editorialPaths.includes(pathname);
  const items = [
    ["/videos", "Videos"],
    ["/projects", "Projects"],
    ["/activities", "Activities"],
    ["/certifications", "Certifications"],
    ["/tech", "Tech Stack"],
  ];

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${
        isEditorialPage
          ? "border-neutral-300/80 bg-[#f4f4f1]/95"
          : "border-neutral-800/60 bg-[#050505]/90"
      }`}
    >
      <div
        className={`mx-auto flex min-h-14 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-3 py-2 text-xs sm:h-14 sm:flex-nowrap sm:gap-5 sm:px-6 sm:py-0 sm:text-sm ${
          isEditorialPage ? "text-neutral-600" : "text-neutral-400"
        }`}
      >
        <Link
          href="/"
          className={`shrink-0 rounded px-2 py-2 font-display text-[11px] font-semibold tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 ${
            isEditorialPage ? "text-neutral-900 hover:text-blue-800" : "text-neutral-200 hover:text-white"
          }`}
        >
          YANG&apos;S SPACE
        </Link>
        <div className="flex w-full flex-wrap items-center gap-x-1 sm:ml-auto sm:w-auto sm:flex-nowrap sm:gap-2">
          {items.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`whitespace-nowrap rounded px-2 py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 sm:px-3 sm:py-2 ${
                pathname === href
                  ? isEditorialPage
                    ? "text-blue-800"
                    : "text-blue-300"
                  : isEditorialPage
                    ? "hover:bg-neutral-900/[0.05] hover:text-neutral-950"
                    : "hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
