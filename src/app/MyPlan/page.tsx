'use client';
import Link from "next/link";
import Image from "next/image";
import { useLogContext } from "@/Context/logContext";
import type { logType } from "@/Cmponents/logType";
import AddedLogs from "../AddedLogs/page";
import { useState } from "react";
import SavedLogs from "../SavedLogs/page";




const Page = () => {
  const[addOrsave,setAddOrsave]= useState<string>("today");

  const { add } = useLogContext();

  return (
    <main className="min-h-screen px-6 py-10 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">My Plan</h1>
          <p className="mt-2 text-gray-300">
            Track your workout plan and stay consistent with your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-3 overflow-hidden rounded-xl border border- bg-[#15171c]">
          <div className="border-r border-gray-200 px-6 py-6 text-center">
            <h2 className="text-2xl font-bold text-white">{add.length}</h2>
            <p className="mt-1 text-sm text-gray-500">Exercise</p>
          </div>
          <div className="border-r border-gray-200 px-6 py-6 text-center">
            <h2 className="text-2xl font-bold text-white">0</h2>
            <p className="mt-1 text-sm text-gray-500">Minutes</p>
          </div>
          <div className="px-6 py-6 text-center">
            <h2 className="text-2xl font-bold text-white">0</h2>
            <p className="mt-1 text-sm text-gray-500">Calories</p>
          </div>
        </div>

        <div className="mt-8 flex gap-8 border-b border-gray-200 pb-4">
          <button className={`btn border-r border-gray-20px-1 pb-3 pr-6 text-sm font-semibold text-white ${addOrsave==="today"? "bg-[#b7ff00]":""}`} onClick={()=>setAddOrsave("today")}>
            Today&apos;s Plan
          </button>
          <button className={`btn  pb-3 px-4 text-sm font-medium text-white ${addOrsave==="save"? "bg-[#b7ff00]":""}` } onClick={()=>setAddOrsave("save")}>
            Saved
          </button>
        </div>

        {add.length === 0 ? (
          <div className="mt-6 flex min-h-[400px] w-full items-center justify-center rounded-xl border border-gray-200 bg-white">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900">Nothing here yet</h2>
              <p className="mt-2 text-gray-500">
                Start adding exercises to create your workout plan.
              </p>
            </div>
          </div>
        ) : (
            addOrsave==="today"? 
          <AddedLogs /> : <SavedLogs/>
        )}
      </div>
    </main>
  );
};

export default Page;
