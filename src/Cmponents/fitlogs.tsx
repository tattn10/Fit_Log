import Fitlog from "./fitlog";

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
    <div className="mx-auto max-w-5xl">
    <h2 className="text-xl">THE LIBRARY</h2>
    <p>Twelve lifts covering every major muscle group.</p>
    <section className=" px-4 py-8 text-white grid grid-cols-3 gap-4">
       {
        logDatas.map((logData)=>
           <Fitlog log={logData} key={logData.id}/>
       )
       }
       </section>
       </div>
    </>
  );
};

export default Fitlogs;