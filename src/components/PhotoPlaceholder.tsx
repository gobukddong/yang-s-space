import Image from "next/image";

interface PhotoPlaceholderProps {
  label: string;
  note?: string;
  src?: string;
}

export default function PhotoPlaceholder({ label, note, src }: PhotoPlaceholderProps) {
  return (
    <figure className="space-y-3">
      <div className="relative aspect-[4/3] overflow-hidden border border-neutral-300 bg-[radial-gradient(ellipse_at_70%_28%,rgba(255,255,255,0.8),transparent_38%),linear-gradient(135deg,#e7e6e1,#f4f4f1_52%,#d8dbd8)]">
        {src ? (
          <Image src={src} alt={label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
        ) : (
          <>
            <div className="absolute inset-4 border border-neutral-400/40" aria-hidden="true" />
            <div className="absolute inset-x-8 top-1/2 h-px bg-neutral-400/30" aria-hidden="true" />
            <div className="absolute inset-y-8 left-1/2 w-px bg-neutral-400/30" aria-hidden="true" />
            <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-9">
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                Photo space
              </span>
              {note && (
                <span className="max-w-[14rem] text-lg leading-snug text-neutral-700 sm:text-xl">
                  {note}
                </span>
              )}
            </div>
          </>
        )}
      </div>
      <figcaption className="text-xs text-neutral-500">{label}</figcaption>
    </figure>
  );
}
