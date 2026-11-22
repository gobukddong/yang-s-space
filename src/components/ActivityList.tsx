import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { activities } from "@/data/activities";

export default function ActivityList() {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {activities.map((activity) => {
        const href = activity.externalUrl || `/activities/${activity.id}`;

        return (
          <li key={activity.id}>
            <Link
              href={href}
              {...(activity.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex min-h-32 items-start justify-between gap-4 border-t border-neutral-300 pt-4 transition-colors hover:text-blue-800"
            >
              <span>
                <span className="block text-xs text-neutral-500">{activity.category}</span>
                <span className="mt-3 block text-lg font-medium text-neutral-900">
                  {activity.title}
                </span>
                <span className="mt-1 block text-sm text-neutral-600">{activity.summary}</span>
              </span>
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="mt-1 shrink-0 text-neutral-500 transition-colors group-hover:text-blue-700"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
