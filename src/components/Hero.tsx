import Cards from "../Items/Cards.tsx";
import {useEffect} from "react";
import setup from '../assets/setup.jpg';
import my from '../assets/aimy.png'
import laptop from '../assets/laptop.webp'
import reacticon from '../assets/reactImage.webp'
import  image1 from '../assets/image1.avif'
import image2 from '../assets/image2.jpg'

const Hero = () => {
    useEffect(() => {
        const handleScroll = () => {
            const text = document.getElementById("heading1");
            const cards = document.querySelectorAll(".parallax-card");

            if (text) {
                text.style.transform = `translateX(-${window.scrollY}px)`;
                text.style.transition = "transform 0.1s ease-in-out";
            }

            cards.forEach((card, index) => {

                let speed = (index + 1); // Adjust speed for each card
                if (index == 1) {
                    speed *= 0.2;
                    (card as HTMLElement).style.transform = `translateY(${"-"+window.scrollY * speed}px)`;
                }else if(index==2){
                    speed *= 0.01;
                    (card as HTMLElement).style.transform = `translateY(${"-"+window.scrollY * speed}px)`;
                }
                else if(index==4 || index==5){
                    speed *= 0.02;
                    (card as HTMLElement).style.transform = `translateY(${"-"+window.scrollY * speed}px)`;
                }
                else {
                    speed *= 0.3;
                (card as HTMLElement).style.transform = `translateY(${window.scrollY * speed}px)`;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div id="hero" className="text-white h-[1300px] md:h-[2000px] w-full relative overflow-hidden">


            <div className="absolute md:left-2/4 left-0 top-1/6 parallax-card">
                <Cards src={setup} height="h-32 w-32 md:h-full md:w-full"/>
            </div>
            <div className="absolute left-1/6 top-0 parallax-card z-40">
                <Cards src={my} height="h-42 w-42 md:h-80 md:w-full"/>
            </div>
            <div className="absolute top-1/2 left-1/6 parallax-card">
                <Cards src={laptop} height="h-42 w-42 md:h-72 md:w-full"/>
            </div>
            <div className="absolute md:left-[75%] left-[50%] top-1/12 md:top-0 parallax-card">
                <Cards src={reacticon}/>
            </div>
            <div className="absolute md:left-1/6 left-3/4 top-[80%] parallax-card">
                <Cards src={image2} height="h-32 w-32 md:h-full md:w-full"/>
            </div>
            <div className="absolute left-[10%] md:left-[75%] top-[80%] parallax-card  z-40">
                <Cards src={image1} height="h-32 w-32 md:h-full md:w-full"/>
            </div>


            <h1 id="heading1"
                className="cursor-pointer font-coolvetica-bold word-spacing-10 tracking-wider text-[150px] sm:text-[350px] md:text-[490px] whitespace-nowrap overflow-hidden z-20 text-ellipsis fixed transition-all top-1/3 md:top-1/12 translate-x-0 translate-y-0 left-0"> FULL STACK
                DEVELOPER </h1>

        </div>
    )
}

export default Hero;