import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import my from "../assets/aimy.png"; // Your image
import { Link } from "react-router";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left - rect.width / 2);
            mouseY.set(e.clientY - rect.top - rect.height / 2);
        }
    };

    // Subtle parallax effect for the image
    const imageX = useTransform(mouseX, [-100, 100], [-20, 20]);
    const imageY = useTransform(mouseY, [-100, 100], [-20, 20]);
    const imageRotateX = useTransform(mouseY, [-100, 100], [5, -5]);
    const imageRotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

    const imageMotionStyle = {
        x: useSpring(imageX, { stiffness: 100, damping: 15 }),
        y: useSpring(imageY, { stiffness: 100, damping: 15 }),
        rotateX: useSpring(imageRotateX, { stiffness: 60, damping: 10 }),
        rotateY: useSpring(imageRotateY, { stiffness: 60, damping: 10 }),
    };

    // Text animations with staggered entrance
    const textVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut"} },
    };

    const buttonVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: "easeInOut", } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    return (
        <section
            id="hero"
            ref={containerRef}
            className="flex flex-1 bg-black items-center justify-center overflow-hidden text-white relative"
            onMouseMove={handleMouseMove}
        >
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
                }}
            />

            <div className="container mx-auto text-center z-10">
                <motion.div
                    className="relative rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 overflow-hidden"
                    style={imageMotionStyle}
                    initial={{ opacity: 0, scale: 0.8, rotateZ: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                    <img
                        src={my}
                        alt="Your Profile"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <motion.div
                        className="absolute inset-0 rounded-full bg-primary-color opacity-0 hover:opacity-20 transition-opacity duration-300"
                    />
                </motion.div>

                <motion.h1
                    className="font-coolvetica-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    Hello, I'm <span className="text-primary-color">Shadab Ali</span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-8 opacity-70"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2 }}
                >
                    A passionate Full Stack Developer.
                </motion.p>

                <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.4 }}
                >
                    <motion.button
                        className="bg-primary-color text-white font-bold py-3 px-6 rounded-full hover:bg-primary-darker transition-colors duration-300 mr-4"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <Link to="/about"> Get in touch</Link>
                    </motion.button>

                    <motion.button
                        className="bg-transparent border border-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                        variants={buttonVariants}
                        whileHover="hover"
                    >

                        <a href="https://drive.google.com/file/d/1YYsH48Bq9Gx9W5gJ5Bbh-7JeVq9-GeAx/view?usp=sharing"
                           target="_blank"> Resume</a>
                    </motion.button>
                </motion.div>
            </div>

            {/* 3D Model Conceptual Placeholder */}
            {/*
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                        <Model3D mouseX={mouseX} mouseY={mouseY} />
                    </Suspense>
                </Canvas>
            </div>
            */}
        </section>
    );
};

export default Hero;
