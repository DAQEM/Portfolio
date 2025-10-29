"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const Expertise = () => {
    const timelineItemVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const timelineConnectorVariants: Variants = {
        hidden: { height: 0 },
        visible: {
            height: "100%",
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.5,
            },
        },
    };

    return (
        <div id="expertise" className="bg-blue-50 py-24">
            <div className="flex flex-col max-w-5xl mx-auto px-4">
                <motion.h2
                    className="text-5xl md:text-7xl font-medium mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    My Expertise
                </motion.h2>
                <p className="text-lg mt-12"></p>
                <div className="mx-auto">
                    <div className="grid md:grid-cols-2 md:gap-8 mt-4">
                        <div className="grid h-min">
                            <motion.div
                                className="grid grid-cols-[4rem_1fr] gap-4"
                                variants={timelineItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="grid grid-rows-[4rem_1fr] w-full">
                                    <div className="w-16 h-16 border-2 border-foreground rounded-full bg-base-300">
                                        <div className="flex h-full w-full justify-center items-center">
                                            <Image
                                                src="/images/expertise/java.webp"
                                                width={40}
                                                height={40}
                                                alt="Java"
                                            />
                                        </div>
                                    </div>
                                    <motion.div
                                        variants={timelineConnectorVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="w-16 flex flex-col items-center"
                                    >
                                        <div className="w-0.5 h-full bg-foreground" />
                                    </motion.div>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold ">
                                        Java
                                    </h4>
                                    <p>
                                        I have started my journey in programming
                                        with Java and have been using it for
                                        over 6 years now. At first, I stated
                                        learning Java to create Minecraft
                                        plugins, but I have since then expanded
                                        my knowledge to building Minecraft mods
                                        and web applications.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-[4rem_1fr] gap-4"
                                variants={timelineItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="grid grid-rows-[4rem_1fr] w-full">
                                    <div className="w-16 h-16 border-2 border-foreground rounded-full bg-base-300">
                                        <div className="flex h-full w-full justify-center items-center">
                                            <Image
                                                src="/images/expertise/csharp.png"
                                                width={32}
                                                height={32}
                                                alt="C#"
                                            />
                                        </div>
                                    </div>
                                    <motion.div
                                        variants={timelineConnectorVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="w-16 flex flex-col items-center"
                                    >
                                        <div className="w-0.5 h-full bg-foreground" />
                                    </motion.div>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold ">
                                        C#
                                    </h4>
                                    <p>
                                        In collage, I learned to use C# to
                                        create desktop and web applications. I
                                        have since then used C# to create a
                                        variety of applications. I mainly use C#
                                        to create backend services with ASP.NET
                                        and Entity Framework.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-[4rem_1fr] gap-4"
                                variants={timelineItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="grid grid-rows-[4rem_1fr] w-full">
                                    <div className="w-16 h-16 border-2 border-foreground rounded-full bg-base-300">
                                        <div className="flex h-full w-full justify-center items-center">
                                            <Image
                                                src="/images/expertise/aspnet.png"
                                                width={48}
                                                height={48}
                                                alt="ASP.NET"
                                            />
                                        </div>
                                    </div>
                                    <motion.div
                                        variants={timelineConnectorVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="w-16 flex flex-col items-center"
                                    >
                                        <div className="w-0.5 h-full bg-foreground" />
                                    </motion.div>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold ">
                                        ASP.NET
                                    </h4>
                                    <p>
                                        In collage, I also learned to use
                                        ASP.NET to create web applications. I
                                        have since then used ASP.NET to create a
                                        variety of web applications. I mainly
                                        use ASP.NET to create backend services
                                        with Entity Framework as the ORM.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-[4rem_1fr] gap-4"
                                variants={timelineItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="grid grid-rows-[4rem_1fr] w-full">
                                    <div className="w-16 h-16 border-2 border-foreground rounded-full bg-base-300">
                                        <div className="flex h-full w-full justify-center items-center">
                                            <Image
                                                src="/images/expertise/php.png"
                                                width={40}
                                                height={40}
                                                alt="PHP"
                                            />
                                        </div>
                                    </div>
                                    <motion.div
                                        variants={timelineConnectorVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="md:hidden w-16 flex flex-col items-center"
                                    >
                                        <div className="w-0.5 h-full bg-foreground" />
                                    </motion.div>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold ">
                                        PHP
                                    </h4>
                                    <p>
                                        I have experience with PHP from a
                                        project called
                                        <a
                                            className="link"
                                            href="/projects/pictrify"
                                        >
                                            Pictrify
                                        </a>
                                        . In this project, I created an API for
                                        the application using PHP.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="grid h-min">
                            <motion.div
                                className="grid grid-cols-[4rem_1fr] gap-4"
                                variants={timelineItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="grid grid-rows-[4rem_1fr] w-full">
                                    <div className="w-16 h-16 border-2 border-foreground rounded-full bg-base-300">
                                        <div className="flex h-full w-full justify-center items-center">
                                            <Image
                                                src="/images/expertise/javascript.png"
                                                width={32}
                                                height={32}
                                                alt="JavaScript"
                                            />
                                        </div>
                                    </div>
                                    <motion.div
                                        variants={timelineConnectorVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="w-16 flex flex-col items-center"
                                    >
                                        <div className="w-0.5 h-full bg-foreground" />
                                    </motion.div>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold ">
                                        JavaScript
                                    </h4>
                                    <p>
                                        I have experience with JavaScript from
                                        creating web applications with React /
                                        Next.JS and SvelteKit.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-[4rem_1fr] gap-4"
                                variants={timelineItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="grid grid-rows-[4rem_1fr] w-full">
                                    <div className="w-16 h-16 border-2 border-foreground rounded-full bg-base-300">
                                        <div className="flex h-full w-full justify-center items-center">
                                            <Image
                                                src="/images/expertise/typescript.png"
                                                width={32}
                                                height={32}
                                                alt="TypeScript"
                                            />
                                        </div>
                                    </div>
                                    <motion.div
                                        variants={timelineConnectorVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="w-16 flex flex-col items-center"
                                    >
                                        <div className="w-0.5 h-full bg-foreground" />
                                    </motion.div>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold ">
                                        TypeScript
                                    </h4>
                                    <p>
                                        Although very similar to JavaScript, I
                                        have experience with TypeScript from
                                        creating web applications with React /
                                        Next.JS and SvelteKit. I prefer to use
                                        TypeScript over JavaScript because of
                                        the type safety, which makes it easier
                                        to work with JavaScript.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-[4rem_1fr] gap-4"
                                variants={timelineItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="grid grid-rows-[4rem_1fr] w-full">
                                    <div className="w-16 h-16 border-2 border-foreground rounded-full bg-base-300">
                                        <div className="flex h-full w-full justify-center items-center">
                                            <Image
                                                src="/images/expertise/nextjs.png"
                                                width={40}
                                                height={40}
                                                alt="Next.JS"
                                            />
                                        </div>
                                    </div>
                                    <motion.div
                                        variants={timelineConnectorVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="w-16 flex flex-col items-center"
                                    >
                                        <div className="w-0.5 h-full bg-foreground" />
                                    </motion.div>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold ">
                                        Next.JS
                                    </h4>
                                    <p>
                                        I have experience with Next.JS from
                                        creating web applications for school and
                                        this website. I prefer to use Next.JS
                                        over React because of the server-side
                                        rendering and the file-based routing.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="grid grid-cols-[4rem_1fr] gap-4"
                                variants={timelineItemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="w-16 h-16 border-2 border-foreground rounded-full bg-base-300">
                                    <div className="flex h-full w-full justify-center items-center">
                                        <Image
                                            src="/images/expertise/tailwind.png"
                                            width={40}
                                            height={40}
                                            alt="Java"
                                        />
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-xl font-semibold ">
                                        Tailwind CSS
                                    </h4>
                                    <p>
                                        I use Tailwind CSS for all of my
                                        projects because it makes it easy to
                                        create responsive and good looking
                                        websites. I prefer to use Tailwind CSS
                                        over other CSS frameworks because of
                                        large community support and simplicity.
                                        Together with Tailwind CSS, I use
                                        DaisyUI to add more components to my
                                        projects.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
