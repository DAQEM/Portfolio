"use client";

import Typewriter from "typewriter-effect";

const ImATypewriter = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Fullstack Developer",
                    "Minecraft Modder",
                    "Network Administrator",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "text-primary",
                delay: 50,
                deleteSpeed: 30,
            }}
        />
    );
};

export default ImATypewriter;
