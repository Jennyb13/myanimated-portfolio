import "./hero.scss"
import { motion } from "framer-motion"

const sliderVariants = {
    initial: {
        x: 0,
    },

    animate: {
        x: "-220%",
        transition: {
            repeat:Infinity,
            repeatType:"mirrow",
           duration:20,
        },
    },
};

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
           duration:1,
           staggerChildren: 0.1,

        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition:{
           duration: 2,
           repeat:Infinity
        },
    },
};


const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div 
                className="textContainer" 
                variants={textVariants} 
                initial="initial" 
                animate="animate"
                >
                    <motion.h2 variants={textVariants}>JENNY BERNAL</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.h1 variants={textVariants}>Inmersive Tecnologics</motion.h1>
                    <motion.div variants={textVariants}className="buttons">
                        <motion.button variants={textVariants}>See the latest Works</motion.button>
                        <motion.button variants={textVariants}>Contac Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="sello" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" 
            variants={sliderVariants} 
            initial="initial" 
            animate="animate"
            >
                !Zen, Green and Creative Coder!!!
            </motion.div>
            <div className="imageContainer">
                <img src="/chica.png" alt="cara" />
            </div>
        </div>

    );
};

export default Hero