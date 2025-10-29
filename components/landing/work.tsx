"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

// Define the type for a single project
type Project = {
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
};

// Placeholder data for your 6 projects.
// Replace this with your actual project details.
const projects: Project[] = [
    {
        title: "DAQEM Studios",
        description:
            "My personal Minecraft modding studio where I create and share custom Minecraft mods.",
        tags: ["Java", "Minecraft Modding"],
        image: "/images/projects/daqem-studios",
        liveUrl: "https://daqem.com",
        githubUrl: "https://github.com/DAQEM",
    },
    {
        title: "Smart Medicine",
        description:
            "An IoT-based medicine conditions monitoring system for during transportation with real-time alerts.",
        tags: [
            "ASP.NET",
            "C#",
            "Entity Framework",
            "MQTT",
            "CoAP",
            "Next.js",
            "C",
            "MySQL",
            "MongoDB",
        ],
        image: "/images/projects/smart-medicine",
    },
    {
        title: "DeskMate",
        description:
            "A web application to manage and book office desks easily.",
        tags: ["ASP.NET", "C#", "Razor", "Entity Framework", "MySQL"],
        image: "/images/projects/deskmate",
        githubUrl: "https://github.com/DAQEM/DeskMate",
    },
    {
        title: "Netmon",
        description:
            "A network monitoring web application that utilizes SNMP to monitor devices in real-time.",
        tags: ["SvelteKit", "SNMP", "ASP.NET", "C#", "MySQL", "MongoDB"],
        image: "/images/projects/netmon",
        githubUrl: "https://github.com/DAQEM/Netmon",
    },
    {
        title: "Cloud AI Scanner",
        description:
            "A web application that scans your cloud resources for AI usage for EU AI Act compliance.",
        tags: [
            "ASP.NET",
            "C#",
            "Google Cloud",
            "AI",
            "Entity Framework",
            "MySQL",
        ],
        image: "/images/projects/cloud-ai-scanner",
        githubUrl: "https://github.com/DAQEM/CloudAIScanner",
    },
    {
        title: "SUE Green Energy",
        description:
            "A cloud-based web application that schedules workloads based on green energy availability to reduce carbon footprint.",
        tags: [
            "ASP.NET",
            "C#",
            "Entity Framework",
            "PostgreSQL",
            "Next.js",
            "AWS",
            "AI",
        ],
        image: "/images/projects/sue-green-energy",
    },
];

// Reusable Project Card component
const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl p-8 h-96 min-w-lg flex flex-col justify-between">
            <div className="absolute inset-0 -z-20 bg-cover bg-center opacity-50 blur-sm scale-110 bg-blue-200" />

            {/* Blurred Background Image */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center opacity-50 blur-sm scale-110"
                style={{
                    backgroundImage: `url('${project.image}/showcase.png')`,
                }}
            />

            {/* Optional: Extra overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-blue-200 via-transparent to-transparent -z-10" />

            <div>
                <Image
                    src={project.image + "/logo.png"}
                    alt={`${project.title} Logo`}
                    width={400}
                    height={200}
                    className="h-16 w-auto"
                />
            </div>

            <div>
                <h3 className="text-4xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out mb-4">
                    <div className="min-h-0 overflow-hidden">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                    <div className="min-h-0 overflow-hidden flex gap-4">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                GitHub Repo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Work = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const [carouselEnd, setCarouselEnd] = useState(0);

    // useLayoutEffect runs after the component has been rendered to the screen,
    // which is the perfect time to measure its dimensions.
    useLayoutEffect(() => {
        const calculateCarouselEnd = () => {
            if (carouselRef.current && targetRef.current) {
                // The visible container is now max-w-5xl with px-4
                const container = targetRef.current.querySelector(".max-w-5xl");
                if (!container) return;

                const containerWidth = container.clientWidth;
                const carouselWidth = carouselRef.current.scrollWidth;

                // Total distance to scroll: carousel width - container width
                // Add 32px padding on each side for visual breathing room
                const newEnd = -(carouselWidth - containerWidth + 32);
                setCarouselEnd(newEnd);
            }
        };

        calculateCarouselEnd();
        window.addEventListener("resize", calculateCarouselEnd);

        return () => window.removeEventListener("resize", calculateCarouselEnd);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, carouselEnd]);

    return (
        <div id="my-work" className="py-24">
            <div className="flex flex-col max-w-5xl mx-auto px-4 mb-12">
                <h2 className="text-5xl md:text-7xl font-medium mx-auto">
                    My Work
                </h2>
                <p className="text-lg mt-12 text-center">
                    Here are some of the projects I&apos;ve worked on recently.
                    Feel free to explore and check out the code on my GitHub
                    profile!
                </p>
            </div>

            {/* --- Desktop Horizontal Scroll Section --- */}
            <section
                ref={targetRef}
                className="relative h-[300vh] hidden md:block"
            >
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    {/* Centered container matching the header width */}
                    <div className="max-w-5xl mx-auto w-full px-4">
                        <motion.div
                            ref={carouselRef}
                            style={{ x }}
                            className="flex gap-8"
                        >
                            {projects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Mobile Vertical Grid Section --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 md:hidden px-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Work;
