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
                    speed *= 0.2;
                (card as HTMLElement).style.transform = `translateY(${window.scrollY * speed}px)`;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div id="hero" className="text-white container h-[2000px] relative overflow-hidden">


            <div className="absolute left-2/4 top-1/6 parallax-card">
                <Cards src={setup}/>
            </div>
            <div className="absolute left-1/6 top-0 parallax-card z-40">
                <Cards src={my} height="h-80"/>
            </div>
            <div className="absolute top-1/2 left-1/6 parallax-card">
                <Cards src={laptop} height="h-72"/>
            </div>
            <div className="absolute left-[75%] top-[30%] parallax-card">
                <Cards src={reacticon}/>
            </div>
            <div className="absolute left-1/6 top-[80%] parallax-card">
                <Cards src={image2}/>
            </div>
            <div className="absolute left-[75%] top-[80%] parallax-card  z-40">
                <Cards src={image1}/>
            </div>


            <h1 id="heading1"
                className="cursor-pointer font-coolvetica-bold word-spacing-10 tracking-wider text-[250px] sm:text-[350px] md:text-[490px] whitespace-nowrap overflow-hidden z-20 text-ellipsis fixed transition-all top-1/12 translate-x-0 translate-y-0 left-0"> FULL STACK
                DEVELOPER </h1>

        </div>
    )
}

export default Hero;