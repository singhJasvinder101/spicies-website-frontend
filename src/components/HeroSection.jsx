import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const HeroSection = ({ heroSection }) => {
    const leftRightSectionIsInView = useInView(heroSection, { once: true });

    useEffect(() => {
        if (leftRightSectionIsInView.inView) {
            const video = leftRightSectionRef.current;
            video.play();
        }
    }, [leftRightSectionIsInView.inView]);

    return (
        <div className="parent">
            <div ref={heroSection} className="parallax2 left-right-content mx-auto my-10 flex justify-between items-center pt-2" >
                <div className="left-content md:w-full my-5">
                    <motion.video
                        src="video.mp4"
                        className='video w-full mx-auto'
                        alt=""
                        autoPlay
                        muted
                        loop
                        initial={{ x: "-20%", opacity: 0 }}
                        animate={
                            leftRightSectionIsInView
                                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
                                : {}
                        }
                    />
                </div>
                <motion.div className="right pb-5 w-[95%] mx-auto" initial={{ x: "10%", opacity: 0, scale: 0 }} animate={leftRightSectionIsInView ? { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } } : {}}>
                    <h1 className='left-heading mt-1 md:mt-5 py-3 font-sans sm:text-3xl md:text-4xl lg:text-4xl font-bold'>Welcome to the World of Exquisite Food Concepts of &nbsp; <span className="dark lato">Kaka Foods & Caterers</span>.</h1>
                    <p className='roboto w-[96%] md:w-[100%] mx-auto pt-3 text-justify text-black'> Dive into a world of aromatic and vibrant spices that will transport your taste buds to distant lands. From the earthy warmth of Ceylon cinnamon to the fiery kick of Kashmiri chili, we offer a wide range of exotic spices sourced from the world's spice capitals. </p>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
