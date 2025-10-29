"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <motion.div
            id="about"
            className="py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <div className="flex flex-col gap-8 max-w-5xl mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-medium sm:col-span-2 mx-auto">
                    About Me
                </h2>
                <div className="grid md:grid-cols-[1fr_256px] gap-8">
                    <p className="text-lg">
                        I&apos;m a software developer based near Eindhoven,
                        passionate about web development, fitness, running,
                        hiking, gaming, and programming. I studied ICT
                        Management at ROC De Leijgraaf, followed by HBO-ICT at
                        Fontys, specializing in Object-Oriented Programming and
                        frameworks like ASP.NET Core, SvelteKit, and Next.js. I
                        gained hands-on experience as a network administrator at
                        TriNed B.V. during a gap year. Proficient in Java with
                        project experience in Minecraft modding as a hobby.
                    </p>
                    <div className="rounded-3xl overflow-hidden size-64">
                        <Image
                            src="/images/portrait.jpeg"
                            alt="Portrait of Kevin"
                            width={256}
                            height={256}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
