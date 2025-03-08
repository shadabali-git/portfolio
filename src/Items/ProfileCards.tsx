import React from 'react';
import {motion} from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaBasketballBall } from 'react-icons/fa';
interface ProfileCardsProps {
    profileImage: string;
    username: string;
    role: string;
    workedOn: string;
}
const ProfileCards:React.FC<ProfileCardsProps> = ({profileImage,username,role,workedOn}) => {
    const [fallback, setFallback] = React.useState(profileImage);
    return (
        <div className="max-w-xs mx-auto bg-black rounded-lg shadow-md overflow-hidden text-white">
            <motion.img
                src={fallback}
                onError={() => setFallback("https://www.winstonproducts.us/wp-content/uploads/2018/03/winston-staff-member-image-fallback-female.png")}
                alt="Profile"
                className="w-80 h-72 object-cover cursor-pointer"
                initial={{scale: 1, textShadow: "5px 5px 10px rgba(255,255,255,0.5)"}}
                whileHover={{scale: 1.1, textShadow: "10px 10px 20px rgba(255,255,255,0.8)"}}
                transition={{duration: 1, ease: "easeInOut"}}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                }}
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{username}</h2>
                <p className="text-gray-300 mb-4">{role} </p>
                <p className="text-gray-300 mb-4">{workedOn} </p>
                <div className="flex justify-start space-x-4">
                    <a href="/" className="text-gray-300 hover:text-white transition duration-300">
                        <FaTwitter/>
                    </a>
                    <a href="/" className="text-gray-300 hover:text-white transition duration-300">
                        <FaLinkedinIn/>
                    </a>
                    <a href="/" className="text-gray-300 hover:text-white transition duration-300">
                        <FaInstagram/>
                    </a>
                    <a href="/" className="text-gray-300 hover:text-white transition duration-300">
                        <FaBasketballBall/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProfileCards;