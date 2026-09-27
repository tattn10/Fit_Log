'use client';

import { useLogContext } from "@/Context/logContext";
import type { logType } from "@/Cmponents/logType";

const SaveButton = ({ log }: { log: logType }) => {
  const { save, setSave } = useLogContext();

  const handleSave = () => {
    setSave((prev) => (prev.some((item) => item.id === log.id) ? prev : [...prev, log]));
  };

  return (
    <button
      onClick={handleSave}
      className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-bold text-zinc-300 transition hover:border-[#b7ff00] hover:text-[#b7ff00]"
    >
      {save.some((item) => item.id === log.id) ? "Saved for Later" : "Save to Later"}
    </button>
  );
};

export default SaveButton;