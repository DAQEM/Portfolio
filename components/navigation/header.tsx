"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="sticky top-6 md:top-12 z-50 my-12"
        >
            <nav className="max-w-max mx-auto bg-white/20 border border-white/20 rounded-full backdrop-blur-md">
                <ul className="flex gap-8 px-8 py-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hidden md:block">
                        <Link href="/#about">About</Link>
                    </li>
                    <li>
                        <Link href="/#my-work">My Work</Link>
                    </li>
                    <li className="hidden md:block">
                        <Link href="/#expertise">Expertise</Link>
                    </li>
                    <li className="hidden md:block">
                        <Link href="/#education">Education</Link>
                    </li>
                    <li>
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;
