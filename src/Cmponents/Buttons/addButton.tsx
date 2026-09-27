'use client';

import { useLogContext } from "@/Context/logContext";
import type { logType } from "@/Cmponents/logType";

const AddButton = ({ log }: { log: logType }) => {
  const { add, setAdd } = useLogContext();

  const handleSetLogs = () => {
    setAdd( [...add, log]);
  };

  return (
    <button
      onClick={handleSetLogs}
      className="rounded-lg bg-[#b7ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-[#b7ff00]"
    >
      {add.some((item) => item.id === log.id) ? "Added to Today's Plan" : "Add to Today's Plan"}
    </button>
  );
};

export default AddButton;