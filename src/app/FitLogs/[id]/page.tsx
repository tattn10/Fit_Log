import AddButton from "@/Cmponents/Buttons/addButton";
import SaveButton from "@/Cmponents/Buttons/saveButton";
import { logType } from "@/Cmponents/logType";
import Image from "next/image";
import Link from "next/link";

interface bookDetailsPageProps{
  params:Promise<{
    id: string
  }>
}


const getLogs = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data= await res.json();
    if (!res.ok) {
      throw new Error(`Failed to fetch logs: ${res.status}`);
    }

    return data;
  } catch (err) {
    console.error("Fitlogs fetch error:", err);
  }
};

const Page =  async ({params}:bookDetailsPageProps) => {
    const {id} = await params;
     const logDatas = await getLogs();
     const choosenLog= logDatas.find((log:logType)=>log.id===Number(id)) ;
     if (!choosenLog) {
    return <h1>Workout not found</h1>;
  }
    return (

        <>
        <div className="conatiner mx-auto max-w-[90%]">
         <main className="min-h-screen bg-[#0c0e12] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#15171c]">

          <div className="grid lg:grid-cols-2">

           
            <div className="relative min-h-[320px] bg-zinc-900 sm:min-h-[450px]">
              <Image
                src={choosenLog.image}
                alt={choosenLog.name}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

       
              <div className="absolute bottom-6 left-6">
                <span className="rounded-full bg-[#b7ff00] px-4 py-2 text-xs font-black uppercase tracking-wide text-black">
                  {choosenLog.difficulty}
                </span>
              </div>
            </div>

  
            <div className="flex flex-col justify-center p-6 sm:p-10">

        
              <div className="mb-5 flex flex-wrap gap-2">
                {choosenLog.muscleGroups.map((muscle:string) => (
                  <span
                    key={muscle}
                    className="rounded-full border border-[#b7ff00]/30 bg-[#b7ff00]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#b7ff00]"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

       
              <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">
                {choosenLog.name}
              </h1>

             
              <p className="mt-4 text-sm text-zinc-500">
                Equipment:{" "}
                <span className="text-zinc-300">
                  {choosenLog.equipment}
                </span>
              </p>

              <div className="mt-5 flex items-center gap-2">
                <span className="text-[#b7ff00]">★</span>

                <span className="font-bold">
                  {choosenLog.rating}
                </span>

                <span className="text-sm text-zinc-500">
                  workout rating
                </span>
              </div>

  
              <div className="mt-8 grid grid-cols-3 gap-3">

                <div className="rounded-xl border border-zinc-800 bg-[#101216] p-4">
                  <p className="text-xs text-zinc-500">
                    Duration
                  </p>

                  <p className="mt-1 text-lg font-bold">
                    {choosenLog.duration}
                    <span className="ml-1 text-xs text-zinc-500">
                      min
                    </span>
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-[#101216] p-4">
                  <p className="text-xs text-zinc-500">
                    Calories
                  </p>

                  <p className="mt-1 text-lg font-bold">
                    {choosenLog.caloriesBurned}
                    <span className="ml-1 text-xs text-zinc-500">
                      kcal
                    </span>
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-[#101216] p-4">
                  <p className="text-xs text-zinc-500">
                    Sets
                  </p>

                  <p className="mt-1 text-lg font-bold">
                    {choosenLog.sets}
                    <span className="ml-1 text-xs text-zinc-500">
                      × {choosenLog.reps}
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>

     
          <div className="grid gap-10 border-t border-zinc-800 p-6 sm:p-10 lg:grid-cols-2">

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#b7ff00]">
                About this workout
              </p>

              <h2 className="text-2xl font-black uppercase">
                Train with intent
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {choosenLog.description}
              </p>

               <div className="mt-6 flex flex-wrap gap-3">
                     <AddButton log={choosenLog} />
                      <SaveButton log={choosenLog} />
          
               </div>
            </div>

    
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#b7ff00]">
                How to perform
              </p>

              <h2 className="text-2xl font-black uppercase">
                Instructions
              </h2>

              <div className="mt-5 space-y-4">
                {choosenLog.instructions.map(
                  (instruction:string, id:number) => (
                    <div
                      key={id}
                      className="flex gap-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b7ff00] text-xs font-black text-black">
                        {id + 1}
                      </span>

                      <p className="pt-1 text-sm leading-6 text-zinc-400">
                        {instruction}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
        </div>
        </>
    )
}

export default Page;