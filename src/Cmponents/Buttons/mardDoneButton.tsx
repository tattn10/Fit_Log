import { useLogContext } from "@/Context/logContext";
import { logType } from "../logType";




const MarkDoneButton = ({log}:{log:logType}) => {
     const { markDone,setMarkDone,setMinute,setCalories,setAdd,add} = useLogContext();

     const handleMarkDone=()=>{
        setMarkDone(true);
        setAdd(add.filter(now=>now.id !== log.id))
        setMinute((prev)=>prev-log.duration)
        setCalories((prev)=>prev-log.caloriesBurned)
          
     }
    return (
        <>
         <button 
         onClick={handleMarkDone}
         className="border rounded-[9999] py-2 px-4 text-sm bg-[#b7ff00] text-black hover:bg-black hover:text-white hover:border-[#b7ff00] ">Mark As Done</button></>
    )
}

export default MarkDoneButton;