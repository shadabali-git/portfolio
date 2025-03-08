import React from 'react';
import { motion } from 'framer-motion';
interface WorkCardsProps {
    src: string;
    domain: string;
    skills: string;
    topic: string;
}
const WorkCards:React.FC<WorkCardsProps> = ({src,domain,skills,topic}) => {
    const [fallback, setFallback] = React.useState(src);
    return (
        <motion.div
            className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <img
                src={fallback}
                onError={
                    () => setFallback("https://w7.pngwing.com/pngs/584/555/png-transparent-insurance-real-estate-industry-business-building-business-company-service-condominium.png")}
                alt="Creative Pulse"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-70"></div>
            <div className="absolute top-4 left-4 text-white text-sm font-semibold">
                {domain}
            </div>
            <div className="absolute top-4 right-4 text-white text-sm font-semibold">
                {skills}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold font-instrument">
                 {topic}
            </div>
            <motion.button
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                VIEW MORE
            </motion.button>
        </motion.div>
    );
};

export default WorkCards;