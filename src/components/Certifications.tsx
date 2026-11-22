"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const certs = [
  {
    id: "1",
    name: "정보처리기능사",
    issuer: "HRD Korea",
    date: "2025.12",
  },
  {
    id: "2",
    name: "MOS Excel Expert",
    issuer: "Microsoft",
    date: "2025.12",
  },
  {
    id: "3",
    name: "SQLD",
    issuer: "K-DATA",
    date: "2026.03",
  },
  {
    id: "4",
    name: "ADsP",
    issuer: "K-DATA",
    date: "2026.11",
  },
];

export default function Certifications() {
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [typedName, setTypedName] = useState("");
  const [typedDate, setTypedDate] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const startDecryption = () => {
    setHasStarted(true);
    setIsDecrypting(true);
    setActiveIndex(0);
    setTypedName("");
    setTypedDate("");
  };

  useEffect(() => {
    if (!isDecrypting || activeIndex < 0 || activeIndex >= certs.length) return;

    const currentName = certs[activeIndex].name;
    if (typedName.length < currentName.length) {
      const timer = window.setTimeout(() => {
        setTypedName(currentName.slice(0, typedName.length + 1));
      }, 24 + Math.random() * 76);
      return () => window.clearTimeout(timer);
    }

    const currentDate = certs[activeIndex].date;
    if (typedDate.length < currentDate.length) {
      const timer = window.setTimeout(() => {
        setTypedDate(currentDate.slice(0, typedDate.length + 1));
      }, 38 + Math.random() * 64);
      return () => window.clearTimeout(timer);
    }

    const nextTimer = window.setTimeout(() => {
      if (activeIndex === certs.length - 1) {
        setIsDecrypting(false);
        return;
      }
      setActiveIndex((index) => index + 1);
      setTypedName("");
      setTypedDate("");
    }, 180 + Math.random() * 180);

    return () => window.clearTimeout(nextTimer);
  }, [activeIndex, isDecrypting, typedName, typedDate]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-8">
      <motion.button
        type="button"
        onClick={startDecryption}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ scale: 1.008 }}
        whileTap={{ scale: 0.995 }}
        className="terminal-shell relative mx-auto block w-full max-w-4xl overflow-hidden text-left outline-none"
        aria-label="자격증 암호 해독 시작"
      >
        <div className="flex h-10 items-center justify-between border-b border-cyan-300/10 bg-white/[0.025] px-4">
          <div className="flex items-center gap-2">
            <span className="font-outfit text-[10px] text-neutral-500">■</span>
            <span className="font-outfit text-[10px] text-neutral-600">_</span>
            <span className="font-outfit text-[10px] text-neutral-600">×</span>
          </div>
          <span className="font-outfit text-[9px] tracking-[0.24em] text-cyan-200/50">
            Administrator: Command Prompt
          </span>
          <span className="font-outfit text-[9px] text-neutral-600">
            {isDecrypting ? "RUNNING" : hasStarted ? "DONE" : "READY"}
          </span>
        </div>

        <div className="terminal-screen relative min-h-[300px] px-5 py-5 md:min-h-[340px] md:px-8 md:py-6">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="terminal-scanline pointer-events-none absolute inset-x-0 h-24" />

          <div className="relative z-10 space-y-3">
            {!hasStarted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              className="py-10 font-outfit"
              >
              <p className="text-sm text-emerald-300">C:\Users\Yang&gt; verify_credentials.bat</p>
              <p className="mt-3 text-[9px] tracking-[0.18em] text-emerald-300/50">
                Press Enter or click to decrypt
              </p>
              </motion.div>
            )}

            {hasStarted && certs.map((item, index) => {
              const isVisible = index < activeIndex || (index === activeIndex && !isDecrypting);
              const isActive = index === activeIndex && isDecrypting;

              return (
                <AnimatePresence key={item.id}>
                  {(isVisible || isActive) && (
                    <motion.div
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex min-h-[42px] items-center font-outfit text-emerald-300"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm md:text-base">
                          {isActive ? typedName : item.name}
                          {isActive && typedName.length === item.name.length && (
                            <span>{typedDate.length > 0 ? ` | ${typedDate}` : " | "}</span>
                          )}
                          {!isActive && <span>{` | ${item.date}`}</span>}
                          {isActive && (
                            <span className="terminal-cursor ml-1 inline-block h-[1em] w-[7px] translate-y-[2px] bg-emerald-300" />
                          )}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              );
            })}
          </div>

          {hasStarted && (
            <div className="relative z-10 mt-5 flex items-center gap-2 font-outfit text-[9px] text-neutral-600">
              <span className="text-cyan-300/50">[</span>
              <span>{isDecrypting ? "typing credential signature..." : "secure access complete"}</span>
              <span className="text-cyan-300/50">]</span>
            </div>
          )}
        </div>
      </motion.button>

      <style jsx global>{`
        .terminal-shell {
          font-family: var(--font-outfit), sans-serif;
          border: 1px solid rgba(103, 232, 249, 0.16);
          border-radius: 4px;
          background: #05090b;
          box-shadow:
            0 28px 80px rgba(0, 0, 0, 0.48),
            0 0 50px rgba(34, 211, 238, 0.035),
            inset 0 1px rgba(255, 255, 255, 0.025);
        }

        .terminal-screen {
          background:
            radial-gradient(circle at 50% 20%, rgba(34, 211, 238, 0.055), transparent 32%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.012), transparent);
        }

        .terminal-scanline {
          top: -96px;
          background: linear-gradient(180deg, transparent, rgba(103, 232, 249, 0.025), transparent);
          animation: terminal-scan 5s linear infinite;
        }

        .terminal-cursor {
          animation: terminal-blink 0.65s steps(1) infinite;
        }

        @keyframes terminal-scan {
          from { transform: translateY(-96px); }
          to { transform: translateY(560px); }
        }

        @keyframes terminal-blink {
          50% { opacity: 0; }
        }

        @media (max-width: 640px) {
          .terminal-shell {
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
}
