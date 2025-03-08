import { motion } from "framer-motion";
import ProfileCards from "../Items/ProfileCards.tsx";

const AboutMe = () => {
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
                initial={{rotateZ: 0, textShadow: "5px 5px 10px rgba(255,255,255,0.5)"}}
                animate={{rotateZ: 360, textShadow: "10px 10px 20px rgba(255,255,255,0.8)"}}
                transition={{duration: 1, ease: "easeInOut"}}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                }}
            >
                ABOUT
            </motion.h1>

            <div className="flex justify-between text-2xl items-center mb-20 w-full">
                <div className="w-1/2 text-left font-bold text-gray-700 font-instrument ">
                    Name
                </div>
                <h1 className="font-instrument font-bold flex-1">
                    SHADAB ALI
                </h1>
            </div>

            <div className="flex justify-between text-2xl items-center mb-20 w-full">
                <div className="w-1/2 text-left font-instrument font-bold text-gray-700  ">
                    Bio
                </div>
                <h1 className="font-instrument font-bold flex-1">
                    I'm a software engineer who loves to build web applications. I'm passionate about learning new
                    technologies and building cool projects.
                </h1>
            </div>
            <div className="flex justify-between text-2xl items-center mb-20 w-full">
                <div className="w-1/2 text-left font-instrument font-bold text-gray-700  ">
                    Tech Stack
                </div>
                <h1 className="font-instrument font-bold flex-1">
                    React, Node, Express, MongoDB, TailwindCSS, Framer Motion, TypeScript ,HTML5, CSS3, JavaScript ,MUI
                    ,Redux,Zustand etc.
                </h1>
            </div>

            <div className="flex justify-between text-2xl items-center mb-20 w-full">
                <div className="w-1/2 text-left font-instrument font-bold text-gray-700  ">
                    LeetCode Profile
                </div>
                <h1 className="font-instrument font-bold flex-1">
                    <a href="https://leetcode.com/u/shadabali_112/" target="_blank">Leet Code</a>
                </h1>
            </div>
            <div className="flex justify-between text-2xl items-center mb-20 w-full">
                <div className="w-1/2 text-left font-instrument font-bold text-gray-700  ">
                    GitHub Profile
                </div>
                <h1 className="font-instrument font-bold flex-1">
                    <a href="https://github.com/shadabali-git" target="_blank"> Git Hub</a>
                </h1>
            </div>
            <div className="flex justify-between text-2xl items-center mb-20 w-full">
                <div className="w-1/2 text-left font-instrument font-bold text-gray-700  ">
                    Education
                </div>
                <h1 className="font-instrument font-bold flex-1">
                    <h2> B.Tech in Information Technology <br/> <span className="text-gray-700"> JSS Academy of Technical Education, Noida</span>
                    </h2>
                    <h2>Diploma in Computer Science <br/> <span className="text-gray-700">Jamia Millia Islamia, New Delhi </span>
                    </h2>
                </h1>
            </div>

            <div className="flex justify-center text-3xl  font-extrabold items-center mb-20 w-full">
                   Connections and Contribution with me
            </div>
            <div className="flex gap-5">
                <ProfileCards profileImage="https://avatars.githubusercontent.com/u/82382156?v=4" username="Thread Ripper" role="SDE-1 S&P Global" workedOn="Chit Chat Web App"/>
                <ProfileCards profileImage="https://media.licdn.com/dms/image/v2/D5603AQGD3PvL35jW9A/profile-displayphoto-shrink_200_200/B56ZPiFh.hG8Ag-/0/1734664924403?e=2147483647&v=beta&t=5o-7s_u6z3IKwRJkJEEbp1506Q9hsE_bSIOr8jj1vLw" username="Mohammad Shadab" role="System Engg. TCS" workedOn=""/>
                <ProfileCards profileImage="https://avatars.githubusercontent.com/u/142974436?v=4" username="Mohit Negi" role="Student JSS"
                 workedOn="Sih,HackJmi"/>
                <ProfileCards profileImage="https://swkdu.jpg" username="Shivam" role="Next Gen Founder"
                              workedOn="nextgenscale.in"/>

            </div>

        </div>
    );
}

export default AboutMe;