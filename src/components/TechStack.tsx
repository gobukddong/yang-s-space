import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const skillGroups = [
  {
    name: "Development",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Python", "C"],
  },
  {
    name: "Platforms",
    skills: ["Linux", "Supabase"],
  },
  {
    name: "Tools",
    skills: ["GitHub", "Excel", "Antigravity", "Cursor", "Stitch", "Mermaid"],
  },
];

export default function TechStack() {
  return (
    <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
      <dl className="divide-y divide-neutral-300">
        {skillGroups.map((group) => (
          <div
            key={group.name}
            className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr] sm:gap-5"
          >
            <dt className="text-sm font-medium text-neutral-900">{group.name}</dt>
            <dd className="text-sm leading-7 text-neutral-600">
              {group.skills.join(", ")}
            </dd>
          </div>
        ))}
      </dl>

      <PhotoPlaceholder
        label="Workspace photo"
      />
    </div>
  );
}
