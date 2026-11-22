import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const certifications = [
  { name: "정보처리기능사", issuer: "HRD Korea", date: "2025.12" },
  { name: "MOS Excel Expert", issuer: "Microsoft", date: "2025.12" },
  { name: "SQLD", issuer: "K-DATA", date: "2026.03" },
  { name: "ADsP", issuer: "K-DATA", date: "2026.11" },
];

export default function Certifications() {
  return (
    <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
      <ol className="divide-y divide-neutral-300">
        {certifications.map((certification, index) => (
          <li
            key={certification.name}
            className="grid grid-cols-[2.5rem_1fr_auto] items-start gap-3 py-5 sm:grid-cols-[3rem_1fr_auto] sm:gap-5"
          >
            <span className="pt-1 font-sans text-xs text-neutral-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-lg font-medium normal-case leading-snug tracking-normal text-neutral-900">
                {certification.name}
              </h2>
              <p className="mt-1 text-sm text-neutral-600">{certification.issuer}</p>
            </div>
            <time
              dateTime={certification.date.replace(".", "-")}
              className="pt-1 text-xs text-neutral-500"
            >
              {certification.date}
            </time>
          </li>
        ))}
      </ol>

      <PhotoPlaceholder
        label="Certification photo"
      />
    </div>
  );
}
