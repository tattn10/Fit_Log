import Image from "next/image";
import Link from "next/link";
import bannerImg from "../assets/banner.png"
import { useLogContext } from "@/Context/logContext";


const Banner = () => {
  
    return (
        <>
      <div className="hero bg-base-200 shadow-sm rounded-xl container max-w-[90%] mx-auto my-12 px-4 py-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
      alt="Tailwind CSS hero component"
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
    <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
      <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG
EVERY SET.</h1>
      <p className="py-6">
       FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the week's work add up.
      </p>
     <Link href="/FitLogs"> <button className="btn bg-[#C2F800] text-black">BROWSE WORKOUTS</button></Link>
    </div>
  </div>
</div>
        </>
    )
}

export default Banner;