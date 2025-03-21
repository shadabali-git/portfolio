import {motion} from "framer-motion";
import WorkCards from "../Items/WorkCards.tsx";
import ChitChat from '../assets/Images/ChitChat.png'
import TikTac from '../assets/Images/tiktac.png'
import Github from '../assets/Images/github.png'

const Work = () => {
    return (
        <div className={`
            text-white
            px-12
            flex flex-col justify-center items-center
            container
            mx-auto
             `}>
            <motion.h1
                className={`
                 leading-tight
                 hover:rotate-z-3
                 cursor-pointer 
                 font-coolvetica-bold word-spacing-10 tracking-wider whitespace-nowrap text-ellipsis
                 text-[100px] sm:text-[250px] md:text-[490px] overflow-hidden
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
               WORK
            </motion.h1>

            <div className="flex gap-5 flex-wrap justify-center">

            <WorkCards
                src={ChitChat}
                domain="Frontend"
                skills="React Tailwind Firebase"
                topic="Chat Application"
                color="bg-blue-500"
                projectLink="https://chit-chat.ijlalahmad.tech"


            />

            <WorkCards
                src={TikTac}
                domain="Backend"
                skills="Express Jwt Socket.io"
                topic="Realtime Game"
                color="bg-neutral-400"
                projectLink="https://express-authentication-henna.vercel.app"


            />
                <WorkCards
                    src="https://res.cloudinary.com/ddnum51yo/image/upload/v1729440679/LeetCode/logo.png"
                    domain="Fullstack"
                    skills="Express React MongoDB"
                    topic="LeetCode Tracker"
                    color="bg-cyan-400"
                    projectLink="https://leet-code-tool-eight.vercel.app"


                />
                <WorkCards
                    src={Github}
                    domain="Web Development"
                    skills="Vanilla JS"
                    topic="First Year Project"
                    color="bg-stone-500"
                    projectLink="https://github.com/shadabali-git/1YearProjects"


                />

            </div>

            <div className="mb-20">

            </div>
        </div>
    );
}

export default Work;