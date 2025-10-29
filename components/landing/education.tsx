"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Education = () => {
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
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            id="education"
            className="bg-blue-50 py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="flex flex-col max-w-5xl mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-medium mx-auto">
                    My Education
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                    <motion.div
                        className="bg-[#FEBCFE] text-[#663366] rounded-3xl p-8"
                        variants={itemVariants}
                    >
                        <Image
                            src="/images/fontys.png"
                            alt="Fontys University of Applied Sciences Logo"
                            className="h-12 w-auto"
                            width={360}
                            height={196}
                        />
                        <h3 className="text-2xl font-semibold mt-4">
                            Fontys University
                        </h3>
                        <p>HBO-ICT Software Engineering</p>
                        <p>September 2020 to Present</p>
                    </motion.div>
                    <motion.div
                        className="bg-[#7CF4CA] text-[#100A76] rounded-3xl p-8"
                        variants={itemVariants}
                    >
                        <Image
                            src="/images/leijgraaf.png"
                            alt="ROC de Leijgraaf Logo"
                            className="h-12 w-auto"
                            width={500}
                            height={180}
                        />
                        <h3 className="text-2xl font-semibold mt-4">
                            ROC de Leijgraaf
                        </h3>
                        <p>ICT Administrator</p>
                        <p>September 2018 to June 2021</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
