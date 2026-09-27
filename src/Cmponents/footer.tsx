
import Image from "next/image";
import logo from "../assets/logo.png";

const Footer = () => {
    
    return (
        <>
        
<footer className=" p-4 flex justify-between items-center border-t-2 border-b-gray-300">

         <div className="flex justify-center items-center">
  <Image
  src={logo}
  alt="logo"
  width={20}
  height={20}
/>
    <a className="btn btn-ghost text-sm">FITLOG</a>
    </div>

    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>

</footer>
        </>
    )
}

export default Footer;