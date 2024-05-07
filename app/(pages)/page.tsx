"use client";

import Image from "next/image";
import ImATypewriter from "../_components/ImATypewriter";

export default function Home() {
    return (
        <div>
            <div className="[background:linear-gradient(to_bottom,rgba(0,0,0,0)_80%,var(--fallback-b2,oklch(var(--b2)/1))),conic-gradient(from_90deg_at_2px_2px,#0000_90deg,var(--fallback-p,oklch(var(--p)/0.15))_0)_0_0/100px_100px]">
                <div className="mx-auto max-w-[100rem] p-4 lg:pt-36 pt-24">
                    <div className="grid lg:grid-cols-[1fr,max-content] gap-36">
                        <div>
                            <p>Hello 👋 my name is</p>
                            <h1 className="text-6xl font-bold">
                                Kevin van der Heijden
                            </h1>
                            <h2 className="mt-6 font-semibold lg:text-3xl text-xl flex gap-2">
                                I&apos;m a <ImATypewriter />
                            </h2>
                            <p className="mt-6">
                                I&apos;m a fullstack developer with experience
                                in building efficient and user-friendly web
                                applications using a variety of technologies
                                such a ASP.NET, Next.JS, SvelteKit & Vue.JS. I
                                also love to create Minecraft mods for other
                                people to enjoy using Java.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <a
                                    href="/projects"
                                    className="btn btn-primary text-base"
                                >
                                    My Work <span>&rarr;</span>
                                </a>
                                <a
                                    href="#contact"
                                    className="btn btn-primary btn-outline text-base"
                                >
                                    Get in touch
                                </a>
                            </div>
                        </div>
                        <div className="lg:flex justify-center items-center hidden">
                            <div className="border-t-[6px] border-l-[6px] border-b-[14px] border-r-[14px] border-primary bg-primary rounded-md">
                                <Image
                                    className="rounded-xl aspect-square object-cover"
                                    src={"/images/portrait.jpg"}
                                    width={280}
                                    height={280}
                                    alt="Kevin's portrait"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:py-48 py-24">
                        <h2 className="uppercase text-3xl font-bold mt-12">
                            About me
                        </h2>
                        <div className="bg-primary w-24 h-[0.4rem] my-2" />
                        <h3>A closer look at my journey in IT</h3>
                        <div className="lg:hidden block mt-4">
                            <div className="border-t-[6px] border-l-[6px] border-b-[14px] border-r-[14px] border-primary bg-primary rounded-md">
                                <Image
                                    className="rounded-xl aspect-square object-cover"
                                    src={"/images/portrait.jpg"}
                                    width={280}
                                    height={280}
                                    alt="Kevin's portrait"
                                />
                            </div>
                        </div>
                        <div className="bg-base-100 p-6 rounded-lg  max-w-5xl mt-6">
                            <p className="mt-4">
                                I&apos;m a fullstack developer with experience
                                in building efficient and user-friendly web
                                applications using a variety of technologies
                                such a ASP.NET, Next.JS, SvelteKit & Vue.JS. I
                                also love to create Minecraft mods for other
                                people to enjoy using Java.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl p-4">
                <h2 className="uppercase text-3xl font-bold mt-12">
                    Expertise
                </h2>
            </div>
        </div>
    );
}
