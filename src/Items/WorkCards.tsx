import React from 'react';
import { motion } from 'framer-motion';
interface WorkCardsProps {
    src: string;
    domain: string;
    skills: string;
    topic: string;
    color: string;
    projectLink: string;
}
const WorkCards:React.FC<WorkCardsProps> = ({src,domain,skills,topic,color,projectLink}) => {
    const [fallback, setFallback] = React.useState(src);
    return (
        <motion.div
            className="relative w-[700px] h-[500px] flex justify-center items-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
        >
            <img
                src={fallback}
                onError={
                    () => setFallback("https://w7.pngwing.com/pngs/584/555/png-transparent-insurance-real-estate-industry-business-building-business-company-service-condominium.png")}
                alt="Creative Pulse"
                className="w-1/2 h-1/2 object-contain"
            />
            <div className={`absolute inset-0 ${color} opacity-70`}></div>
            <div className="absolute top-4 left-4 text-white text-sm font-semibold font-instrument capitalize">
                {domain}
            </div>
            <div className="absolute top-4 right-4 text-white text-sm font-semibold">
                {skills}
            </div>
            <motion.h1
                className={`
                 absolute
                 leading-loose
                 cursor-pointer 
                 font-coolvetica-bold tracking-wider whitespace-nowrap
                 text-7xl overflow-hidden
                  z-20 
                  `}
            >
                {topic.toUpperCase()}
            </motion.h1>

            <motion.button
                className="absolute cursor-pointer bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-500 rotate-0 border-3 border-transparent transition-all hover:border-b-white hover:bg-blue-600 hover:border-white text-white font-semibold py-2 px-6"
                initial={{rotate: 0}}
                whileHover={{rotate: 3}}
                onClick={() => window.open(projectLink)}

            >
                VISIT
            </motion.button>




        </motion.div>
    );
};

export default WorkCards;