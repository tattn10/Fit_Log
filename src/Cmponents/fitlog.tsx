import Image from "next/image";
import type { logType } from "./logType";

export type FitlogProps = {
  log: logType;
};

const Fitlog = ({ log }: FitlogProps) => {
  return (
    <>
      <article className="w-full max-w-[340px] overflow-hidden rounded-2xl border border-zinc-800 bg-[#15171c] shadow-lg">
      {/* Image */}
      <div className="relative h-[185px] w-full">
        <Image
          src={log.image}
          alt={log.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#b7ff00] px-3 py-1 text-[10px] font-black uppercase text-black">
            {log.difficulty}
          </span>

          {log.muscleGroups.slice(0, 1).map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#b7ff00] px-3 py-1 text-[10px] font-black uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-lg font-black uppercase tracking-tight text-white">
          {log.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-xs text-zinc-500">
          {log.equipment}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-zinc-800" />

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            <span>{log.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 2.5c.4 3-1.1 4.7-2.5 6.2C9.8 9.9 9 11 9 12.5c0 1.4 1 2.5 2.3 2.5 1.8 0 3.2-1.5 3.2-3.6 1.9 1.8 2.5 3.7 2.5 5.5 0 3.3-2.7 5.6-6 5.6s-6-2.5-6-6.2c0-3.2 1.8-5.6 4.2-7.7C11.1 6.7 12.5 4.8 13.5 2.5Z" />
            </svg>

            <span>{log.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
            </svg>

            <span>{log.rating}</span>
          </div>
        </div>
      </div>
    </article>
        </>
    )
}

export default Fitlog;