import Fitlog from "@/Cmponents/fitlog";
import type { logType } from "@/Cmponents/logType";


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

const Fitlogs = async () => {
  const logDatas = await getLogs();
  console.log(logDatas)
  return (
    <>
    <div className="mx-auto max-w-[90%] px-4 py-8">
        <div className="mb-8">
    <h2 className="text-xl">THE LIBRARY</h2>
    <p className="font-light text-sm text-gray-300">Twelve lifts covering every major muscle group.</p>
    </div>
    <section className=" text-white grid grid-cols-4 gap-4">
       {
        logDatas.map((logData:logType)=>
           <Fitlog log={logData} key={logData.id}/>
       )
       }
       </section>
       </div>
    </>
  );
};

export default Fitlogs;