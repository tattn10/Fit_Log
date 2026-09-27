'use client';

import { useLogContext } from "@/Context/logContext";
import type { logType } from "@/Cmponents/logType";

const SaveButton = ({ log }: { log: logType }) => {
  const { save, setSave } = useLogContext();
  const alreadySaved = save.some((item) => item.id === log.id);

  const handleSave = () => {
    if (alreadySaved) return;
    setSave((prev) => [...prev, log]);
  };

  return (
    <button
      onClick={handleSave}
      disabled={alreadySaved}
      className={`rounded-lg border px-5 py-3 text-sm font-bold transition ${
        alreadySaved
          ? "cursor-not-allowed border-zinc-600 text-zinc-500"
          : "border-zinc-700 text-zinc-300 hover:border-[#b7ff00] hover:text-[#b7ff00]"
      }`}
    >
      {alreadySaved ? "Saved for Later" : "Save to Later"}
    </button>
  );
};

export default SaveButton;