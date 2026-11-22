import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

interface CollectionPageProps {
  title: string;
  children: ReactNode;
}

export default function CollectionPage({ title, children }: CollectionPageProps) {
  return (
    <main className="min-h-screen bg-[#f4f4f1] px-5 pt-14 pb-16 text-[#30302e] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex min-h-[calc(100svh-3.5rem)] items-center justify-center text-center">
          <h1 className="mx-auto max-w-6xl font-sans text-5xl font-medium normal-case leading-[1.08] tracking-tight sm:text-7xl md:text-8xl">
            <span className="text-black">{title}</span>{" "}
            <span className="text-neutral-500">for my</span>{" "}
            <span className="text-black">20&apos;s</span>{" "}
            <span className="text-neutral-500">life.</span>
          </h1>
        </header>

        <section
          aria-label={`${title} collection`}
          className="scroll-mt-20 pt-10"
        >
          <RevealOnScroll>{children}</RevealOnScroll>
        </section>

        <Footer />
      </div>
    </main>
  );
}
