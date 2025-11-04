"use client";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import Education from "@/components/landing/education";
import Expertise from "@/components/landing/expertise";
import Work from "@/components/landing/work";
import { motion, useScroll, useTransform, Transition } from "framer-motion";
import { useMemo } from "react";

const gradients = [
    { x: "-50%", y: "-80%", color: "from-cyan-400/50" },
    { x: "-50%", y: "-65%", color: "from-blue-500/50" },
    { x: "-50%", y: "-40%", color: "from-cyan-600/50" },
    { x: "-25%", y: "-80%", color: "from-cyan-400/50" },
    { x: "-25%", y: "-65%", color: "from-blue-500/50" },
    { x: "-25%", y: "-40%", color: "from-cyan-600/50" },
    { x: "0%", y: "-80%", color: "from-cyan-400/50" },
    { x: "0%", y: "-65%", color: "from-blue-500/50" },
    { x: "0%", y: "-40%", color: "from-blue-600/50" },
    { x: "25%", y: "-80%", color: "from-cyan-400/50" },
    { x: "25%", y: "-65%", color: "from-blue-500/50" },
    { x: "25%", y: "-40%", color: "from-cyan-600/50" },
    { x: "50%", y: "-80%", color: "from-cyan-400/50" },
    { x: "50%", y: "-65%", color: "from-blue-500/50" },
    { x: "50%", y: "-40%", color: "from-blue-600/50" },
];

export default function Home() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const animatedGradients = useMemo(() => {
        return gradients.map(({ x, y, color }) => {
            const xVal = parseInt(x, 10);
            const yVal = parseInt(y, 10);
            const transition: Transition = {
                duration: 15 + Math.random() * 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
            };
            return {
                color,
                initial: { x, y },
                animate: {
                    x: [
                        `${xVal}%`,
                        `${xVal + Math.random() * 10 - 5}%`,
                        `${xVal - Math.random() * 10 - 5}%`,
                        `${xVal}%`,
                    ],
                    y: [
                        `${yVal}%`,
                        `${yVal + Math.random() * 10 - 5}%`,
                        `${yVal - Math.random() * 10 - 5}%`,
                        `${yVal}%`,
                    ],
                },
                transition,
            };
        });
    }, []);

    return (
        <>
            <motion.div
                style={{ y }}
                className="absolute overflow-clip top-0 left-0 w-full h-screen -z-10"
            >
                {animatedGradients.map((grad, i) => (
                    <motion.div
                        key={i}
                        className={`absolute size-[200vh] md:w-full aspect-square bg-radial to-50% to-transparent ${grad.color}`}
                        initial={grad.initial}
                        animate={grad.animate}
                        transition={grad.transition}
                    />
                ))}
            </motion.div>
            <div className="my-16 flex flex-col">
                <motion.div
                    className="max-w-5xl mx-auto px-4 pb-24"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-5xl md:text-[178px] md:leading-[185px] font-bold max-w-max mx-auto md:m-0"
                        variants={itemVariants}
                    >
                        Hi. I&apos;m Kevin.
                    </motion.h1>
                    <motion.h2
                        className="text-3xl md:text-[105px] md:leading-[109px] font-medium max-w-max mx-auto md:m-0"
                        variants={itemVariants}
                    >
                        A Software Engineer.
                    </motion.h2>
                    <motion.p
                        className="max-w-3xl mt-12 text-lg"
                        variants={itemVariants}
                    >
                        I&apos;m a fullstack developer, building user-friendly
                        web applications using ASP.NET, Next.js, SvelteKit, and
                        Vue.js. I also enjoy creating Java-based Minecraft mods
                        for others to enjoy.
                    </motion.p>
                </motion.div>
                <About />
                <Education />
                <Work />
                <Expertise />
                <Contact />
            </div>
        </>
    );
}
