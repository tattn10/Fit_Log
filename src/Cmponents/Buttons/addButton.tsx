'use client';
import { ToastContainer, toast } from 'react-toastify';
import { useLogContext } from "@/Context/logContext";
import type { logType } from "@/Cmponents/logType";
import { useState } from "react";

const AddButton = ({ log }: { log: logType }) => {
  const { add, setAdd,minute,setMinute,calories,setCalories } = useLogContext();
 
  const alreadyAdded = add.some((item) => item.id === log.id);

  const handleSetLogs = () => {
    if (alreadyAdded) return;
    setAdd((prev) => [...prev, log]);
    setMinute((prev)=>prev+log.duration)
       setCalories((prev)=>prev+log.caloriesBurned)
       toast(`${log.name} added to today's plan`)
  };

  return (
    <button
      onClick={handleSetLogs}
      disabled={alreadyAdded}
      className={`rounded-lg px-5 py-3 text-sm font-bold transition ${
        alreadyAdded
          ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
          : "bg-[#b7ff00] text-black hover:bg-black hover:text-[#b7ff00]"
      }`}
    >
      {alreadyAdded ? "Added to Today's Plan" : "Add to Today's Plan"}
    </button>
  );
};

export default AddButton;