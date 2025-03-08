import {motion} from "framer-motion";
import WorkCards from "../Items/WorkCards.tsx";

const Work = () => {
    return (
        <div className={`
            text-white
            px-12
            flex flex-col justify-center items-center
            container
             `}>
            <motion.h1
                className={`
                 leading-tight
                 hover:rotate-z-3
                 cursor-pointer 
                 font-coolvetica-bold word-spacing-10 tracking-wider whitespace-nowrap text-ellipsis
                 text-[250px] sm:text-[350px] md:text-[490px] overflow-hidden
                  z-20 
                  `}
                initial={{rotateX: 0, textShadow: "5px 5px 10px rgba(255,255,255,0.5)"}}
                animate={{rotateX: 360, textShadow: "10px 10px 20px rgba(255,255,255,0.8)"}}
                transition={{duration: 1, ease: "easeInOut"}}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                }}
            >
               Work
            </motion.h1>

            <WorkCards
                src="https://images.unsplash.com/photo-1622838320000-4b3b3b3b3b3b"
                domain="Frontend"
                skills="React, TailwindCSS, Framer Motion"
                topic="Building a Portfolio"


            />
        </div>
    );
}

export default Work;