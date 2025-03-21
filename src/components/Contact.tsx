import { SiLeetcode,SiGithub ,SiLinkedin,SiHackerrank, SiHackerearth, SiCodechef,SiGeeksforgeeks, SiCodepen,SiCodingninjas } from "react-icons/si";
import { FaHashnode } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from "framer-motion";


const Contact = () => {
    return (
        <div className={`
            text-white
            px-12
            flex flex-col justify-center items-center
            container
            mx-auto
            
       `}>
            <h1 className="text-2xl font-instrument font-bold"> Platform </h1>
            <div className="flex flex-wrap gap-10 p-4">
            <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-amber-950`}>
                <SiCodechef className="w-24 h-24"/>
            </motion.a>
            <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-slate-600`} href="https://github.com/shadabali-git" target="_blank">
                <SiGithub className="w-24 h-24"/>
            </motion.a>
            <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-purple-950`}>
                <SiHackerearth className="w-24 h-24"/>
            </motion.a>
            <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-green-500`}>
                <SiHackerrank className="w-24 h-24"/>
            </motion.a>
            <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-yellow-600`} href="https://leetcode.com/u/shadabali_112/" target="_blank">
                <SiLeetcode className="w-24 h-24"/>
            </motion.a>
            <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-blue-950`}  href="https://www.linkedin.com/in/shadab-ali-a3b667253/" target="_blank">
                <SiLinkedin className="w-24 h-24"/>
            </motion.a>
            <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-cyan-500`} href="https://hashnode.com/@shaddyCracker" target="_blank">
                <FaHashnode className="w-24 h-24"/>
            </motion.a>
            <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-slate-600`}>
                <RiTwitterXFill className="w-24 h-24"/>
            </motion.a>
                <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-green-900`}>
                    <SiGeeksforgeeks className="w-24 h-24"/>
                </motion.a>
                <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-yellow-700`}>
                    <SiCodingninjas className="w-24 h-24"/>
                </motion.a>
                <motion.a className={`w-56 h-56 flex justify-center items-center bg-white rounded-full text-black cursor-pointer hover:text-slate-300`}>
                    <SiCodepen className="w-24 h-24"/>
                </motion.a>
            </div>

        </div>
    );
}
export default Contact;