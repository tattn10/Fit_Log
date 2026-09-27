'use client';
import Link from "next/link";
import Image from "next/image";
import { useLogContext } from "@/Context/logContext";
import type { logType } from "@/Cmponents/logType";
import AddButton from "@/Cmponents/Buttons/addButton";

const SavedLogs = () => {
  const { save } = useLogContext();
  return (
    <div className=" p-8 text-white">
      <h1 className="mb-6 text-2xl font-bold">Saved for Later</h1>

      {save.length === 0 ? (
        <p className="text-zinc-400">No workouts saved yet.</p>
      ) : (
      <div className="mt-6 space-y-4">
            {save.map((log: logType) => (
              <div key={log.id} className="  flex justify-between items-center rounded-lg border border-zinc-700 bg-zinc-900 p-4 text-white">
                <div className="flex">
            <div>
            <Image
             src={log.image}
             alt={log.name}
             width="100"
             height="100"
             className="pr-2  rounded-md"
             />
            </div>
            <div className="flex flex-col gap-2">
         <h1 className="text-lg">{log.name}</h1>
         <p className="font-light text-sm text-gray-400">{log.equipment}</p>
         
         

 <div className="flex items-center gap-4 text-xs text-zinc-400">
  
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
                </div>
                <div>
                
                    <Link href={`/FitLogs/${log.id}`} className="border rounded-[9999] py-2 px-4 font-sm">Show Details</Link>
                     
                </div>
              </div>
            ))}
          </div>
      )}
    </div>
  );
};

export default SavedLogs;
