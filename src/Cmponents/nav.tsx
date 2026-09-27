import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

const Nav = () => {
    
    return (
        <>
        <header className="border-b-2 border-b-gray-500">
       <div className="navbar shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/FitLogs">Workouts</Link></li>
        <li><a>My Plan</a></li>
      </ul>
    </div>
    <div className="flex justify-center items-center">
  <Image
  src={logo}
  alt="logo"
  width={30}
  height={30}
/>
    <Link href="/" className="btn btn-ghost text-xl">FITLOG</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><Link href="/FitLogs">Workouts</Link></li>
        <li><a>My Plan</a></li>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-4">
    <a className="mx-2 inline-flex items-center gap-2">
      <span>Plan</span>
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#CCFF00] px-2 text-center text-sm font-medium text-black">0</span>
    </a>
    <a className="mx-2 inline-flex items-center gap-2">
      <span>Saved</span>
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full  px-2 text-center text-sm font-medium text-white">0</span>
    </a>
  </div>
  
</div>

        </header>
    
        </>
    )
}

export default Nav;