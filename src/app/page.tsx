import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const collections = [
  {
    href: "/videos",
    number: "01",
    title: "Videos",
  },
  {
    href: "/projects",
    number: "02",
    title: "Projects",
  },
  {
    href: "/activities",
    number: "03",
    title: "Activities",
  },
  {
    href: "/certifications",
    number: "04",
    title: "Certifications",
  },
  {
    href: "/tech",
    number: "05",
    title: "Tech Stack",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] px-5 pt-14 pb-16 text-[#30302e] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex min-h-[calc(100svh-3.5rem)] items-center justify-center text-center">
          <h1 className="max-w-6xl font-sans text-5xl font-medium normal-case leading-[1.08] tracking-tight sm:text-7xl md:text-8xl">
            <span className="text-black">My Space,</span>
            <br />
            <span className="text-neutral-500">Playground</span>
          </h1>
        </header>

        <section className="pt-10">
          <RevealOnScroll>
            <nav aria-label="Portfolio sections">
              {collections.map((collection) => (
                <Link
                  key={collection.href}
                  href={collection.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-neutral-300 py-5 transition-colors hover:text-blue-800 sm:grid-cols-[4rem_1fr_auto] sm:gap-5 sm:py-6"
                >
                  <span className="font-outfit text-xs text-neutral-500">{collection.number}</span>
                  <span>
                    <span className="text-xl font-medium normal-case tracking-normal text-neutral-900 sm:text-2xl">
                      {collection.title}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="text-neutral-500 transition-colors group-hover:text-blue-700"
                  />
                </Link>
              ))}
            </nav>
          </RevealOnScroll>
        </section>

        <Footer />
      </div>
    </main>
  );
}
