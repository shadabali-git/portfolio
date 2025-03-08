import logo from '../assets/logo.png';
import {NavLink} from "react-router";
import {useState} from "react";
import { HiOutlineMenu ,HiOutlineMenuAlt3} from "react-icons/hi";


const Navbar = () => {
       const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <nav className="px-10 bg-black h-20 flex justify-between items-center font-sans">
            <div className="w-20 mt-4">
                <img src={logo} alt="shady" className="object-fill"/>
            </div>
            <div>
                <div className="md:hidden">
                    <button className="text-white text-2xl" onClick={()=>setIsOpen((prev)=>!prev)}>
                        {isOpen?<HiOutlineMenuAlt3 />:<HiOutlineMenu />}
                    </button>
                </div>
            </div>
            <div className="hidden md:flex gap-2">

                <NavLink
                    to="/"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                >
                    <div className="relative flex flex-col h-6 overflow-hidden">
                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-300 ease-in group-hover:-translate-y-full">
                            Home
                        </div>

                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-200 ease-in translate-y-0 group-hover:-translate-y-full">
                            Home
                        </div>

                    </div>
                    <div
                        className="w-0 mt-1 bg-white h-[1px] transition-all duration-400 ease-in group-hover:w-full">

                    </div>
                </NavLink>
                <NavLink
                    to="/about"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                >
                    <div className="relative flex flex-col h-6 overflow-hidden">
                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-300 ease-in group-hover:-translate-y-full">
                            About
                        </div>

                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-200 ease-in translate-y-0 group-hover:-translate-y-full">
                            About
                        </div>

                    </div>
                    <div
                        className="w-0 mt-1 bg-white h-[1px] transition-all duration-400 ease-in group-hover:w-full">

                    </div>
                </NavLink>
                <NavLink
                    to="/work"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                >
                    <div className="relative flex flex-col h-6 overflow-hidden">
                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-300 ease-in group-hover:-translate-y-full">
                            Work
                        </div>

                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-200 ease-in translate-y-0 group-hover:-translate-y-full">
                            Work
                        </div>

                    </div>
                    <div
                        className="w-0 mt-1 bg-white h-[1px] transition-all duration-400 ease-in group-hover:w-full">

                    </div>
                </NavLink>
                <NavLink
                    to="/contact"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                >
                    <div className="relative flex flex-col h-6 overflow-hidden">
                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-300 ease-in group-hover:-translate-y-full">
                            Contact
                        </div>

                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-200 ease-in translate-y-0 group-hover:-translate-y-full">
                            Contact
                        </div>

                    </div>
                    <div
                        className="w-0 mt-1 bg-white h-[1px] transition-all duration-400 ease-in group-hover:w-full">

                    </div>
                </NavLink>
                <NavLink
                    to="/extra"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                >
                    <div className="relative flex flex-col h-6 overflow-hidden">
                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-300 ease-in group-hover:-translate-y-full">
                            Blog
                        </div>

                        <div
                            className="flex items-center justify-center w-full h-full transition-transform duration-200 ease-in translate-y-0 group-hover:-translate-y-full">
                            Blog
                        </div>

                    </div>
                    <div
                        className="w-0 mt-1 bg-white h-[1px] transition-all duration-400 ease-in group-hover:w-full">

                    </div>
                </NavLink>



            </div>

        </nav>
            {isOpen && <div className="md:hidden bg-black text-white">
                <NavLink
                    to="/"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                    >
                    Home
                </NavLink>
                <NavLink

                    to="/about"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                    >
                    About
                </NavLink>
                <NavLink
                    to="/work"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                    >
                    Work
                </NavLink>
                <NavLink
                    to="/contact"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                    >
                    Contact
                </NavLink>
                <NavLink
                    to="/extra"
                    className="group text-white flex flex-col justify-center items-center text-2xl font-medium leading-8 no-underline"
                    >
                    Blog
                </NavLink>
            </div>}

        </>
    );
}

export default Navbar;