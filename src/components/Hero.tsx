import Cards from "../Items/Cards.tsx";
// import {useState, useEffect} from "react";
import {useRef} from "react";
// import setup from '../assets/setup.jpg';
import my from '../assets/aimy.png'
// import laptop from '../assets/laptop.webp'
// import reacticon from '../assets/reactImage.webp'
// import  image1 from '../assets/image1.avif'
// import image2 from '../assets/image2.jpg'
import background from '../assets/backgroundImage.avif'
import {motion,useScroll} from "framer-motion";


const Hero = () => {
    // const [scrollX, setScrollX] = useState(0);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollX(window.scrollY);
    //     }
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [])
        const ref = useRef(null)
        const { scrollYProgress } = useScroll({ container: ref });
        console.log(scrollYProgress.get())

    return (
        <div id="hero" ref={ref} className={`text-white h-[1300px] md:h-[2000px] w-full relative overflow-hidden`}
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${background})`,
                    opacity: 0.4, filter: "blur(10px)"
                }}
            ></div>


            {/*<Parallax speed={-40} translateY={[-150, 50]} className="absolute md:left-1/2 left-0 top-[15%]">*/}
            {/*    <Cards src={setup} height="h-32 w-32 md:h-64 md:w-64"/>*/}
            {/*/!*</Parallax>*!/*/}

            {/*/!*<Parallax speed={-30} translateX={[-10, 10]} className="absolute left-[10%] top-0 z-40">*!/*/}
            {/*    <Cards src={my} height="h-40 w-40 md:h-72 md:w-72"/>*/}
            {/*/!*</Parallax>*!/*/}

            {/*/!*<Parallax speed={-20} translateY={[30, -30]} className="absolute top-[50%] left-[10%]">*!/*/}
            {/*    <Cards src={laptop} height="h-42 w-42 md:h-72 md:w-72"/>*/}
            {/*/!*</Parallax>*!/*/}

            {/*/!*<Parallax speed={-345} className="absolute md:left-[75%] left-[50%] top-[5%]">*!/*/}
            {/*    <Cards src={reacticon}/>*/}
            {/*/!*</Parallax>*!/*/}


            {/*/!*<Parallax speed={10} translateX={[200, 50]} translateY={[20, -20]} className="absolute md:left-[20%] left-[70%] top-[85%]">*!/*/}
            {/*    <Cards src={image2} height="h-32 w-32 md:h-60 md:w-60"/>*/}
            {/*</Parallax>*/}

            {/*<Parallax speed={-70} translateY={[-100, 50]} className="absolute left-[10%] md:left-[75%] top-[85%] z-40">*/}
            {/*    <Cards src={image1} height="h-32 w-32 md:h-64 md:w-64"/>*/}
            {/*</Parallax>*/}

            <motion.h1
                className={`
                 leading-tight
                 hover:rotate-z-3
                 cursor-pointer 
                 font-coolvetica-bold word-spacing-10 tracking-wider whitespace-nowrap text-ellipsis
                 text-[100px] sm:text-[350px] md:text-[480px] overflow-hidden
                  z-20 
                  fixed
                  `}
                initial={{rotateZ: 0, textShadow: "2px 2px 2px rgba(255,255,255,0.5)"}}
                animate={{translateX: scrollYProgress.get(), textShadow: "3px 2px 5px rgba(255,255,255,0.8)"}}
                transition={{duration: 0.1, ease: "easeInOut"}}
                translate={"yes"}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                }}
            >
                FULL STACK DEVELOPER
            </motion.h1>

            <motion.div className=""
                        initial={{opacity: 0}}
                        transition={{duration: 3, ease: "easeInOut"}}
                        whileInView={{opacity: 1}}

            >
                <Cards src={my} height="h-40 w-40 md:h-full md:w-72"/>
            </motion.div>


        </div>
    )
}

export default Hero;