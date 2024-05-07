"use client";

import Image from "next/image";
import GitHubIcon from "../_components/GitHubIcon";
import ImATypewriter from "../_components/ImATypewriter";
import LinkedInIcon from "../_components/LinkedInIcon";

export default function Home() {
    return (
        <div>
            <div className="[background:linear-gradient(to_bottom,rgba(0,0,0,0)_80%,var(--fallback-b2,oklch(var(--b2)/1))),conic-gradient(from_90deg_at_2px_2px,#0000_90deg,var(--fallback-p,oklch(var(--p)/0.15))_0)_0_0/100px_100px]">
                <div className="mx-auto max-w-[100rem] p-4 lg:pt-36 pt-24">
                    <div className="grid lg:grid-cols-[1fr,max-content] gap-36">
                        <div>
                            <p>Hello 👋 my name is</p>
                            <h1 className="text-6xl font-bold brightness-150">
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
                    <div
                        id="about"
                        className="flex flex-col items-center lg:py-48 py-24"
                    >
                        <h2 className="uppercase text-3xl font-bold mt-12 brightness-150">
                            About me
                        </h2>
                        <div className="bg-primary w-24 h-[0.4rem] my-2" />
                        <h3 className="text-lg">
                            A closer look at my journey in IT
                        </h3>
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
                                I am a software developer based in a small town
                                near Eindhoven. My interests include fitness,
                                running, and hiking, as well as gaming and
                                programming. I am passionate about web
                                development and have experience working on
                                projects such as website development and
                                Minecraft mods.
                            </p>
                            <p className="mt-4">
                                After completing my Mavo diploma in 2018, I
                                pursued further education in ICT Management at
                                ROC De Leijgraaf. Following this, I gained
                                valuable experience working as a network
                                administrator at TriNed B.V. during a gap year
                                caused by the Covid pandemic. During this time,
                                I deepened my understanding of networks and
                                gained insight into the operations of an
                                internet provider.
                            </p>
                            <p className="mt-4">
                                In addition to my professional experience, I am
                                proficient in Java and have self-taught
                                languages such as JavaScript, Python, CSS, and
                                HTML. Seeking to expand my knowledge, I enrolled
                                in the HBO-ICT program at Fontys in Eindhoven,
                                where I focused on Object-Oriented Programming
                                and gained familiarity with frameworks like
                                ASP.NET Core, SvelteKit, and Nust.js.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl p-4 mb-24">
                <h2 className="uppercase text-3xl font-bold mt-12 brightness-150">
                    Expertise
                </h2>
                <div className="bg-primary w-24 h-[0.4rem] my-2" />
                <h3 className="text-lg">A list of my core skills & tools</h3>
                <div className="grid md:grid-cols-2 md:gap-8 mt-4">
                    <div className="grid h-min">
                        <div className="grid grid-cols-[4rem,1fr] gap-4">
                            <div className="grid grid-rows-[4rem,1fr] w-full">
                                <div className="w-16 h-16 border-2 border-primary rounded-full bg-base-300">
                                    <div className="flex h-full w-full justify-center items-center">
                                        <Image
                                            src="/images/expertise/java.webp"
                                            width={40}
                                            height={40}
                                            alt="Java"
                                        />
                                    </div>
                                </div>
                                <div className="w-16 flex flex-col items-center">
                                    <div className="w-[2px] h-full bg-primary" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold brightness-150">
                                    Java
                                </h4>
                                <p>
                                    I have started my journey in programming
                                    with Java and have been using it for over 6
                                    years now. At first, I stated learning Java
                                    to create Minecraft plugins, but I have
                                    since then expanded my knowledge to building
                                    Minecraft mods and web applications.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[4rem,1fr] gap-4">
                            <div className="grid grid-rows-[4rem,1fr] w-full">
                                <div className="w-16 h-16 border-2 border-primary rounded-full bg-base-300">
                                    <div className="flex h-full w-full justify-center items-center">
                                        <Image
                                            src="/images/expertise/csharp.png"
                                            width={32}
                                            height={32}
                                            alt="C#"
                                        />
                                    </div>
                                </div>
                                <div className="w-16 flex flex-col items-center">
                                    <div className="w-[2px] h-full bg-primary" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold brightness-150">
                                    C#
                                </h4>
                                <p>
                                    In collage, I learned to use C# to create
                                    desktop and web applications. I have since
                                    then used C# to create a variety of
                                    applications. I mainly use C# to create
                                    backend services with ASP.NET and Entity
                                    Framework.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[4rem,1fr] gap-4">
                            <div className="grid grid-rows-[4rem,1fr] w-full">
                                <div className="w-16 h-16 border-2 border-primary rounded-full bg-base-300">
                                    <div className="flex h-full w-full justify-center items-center">
                                        <Image
                                            src="/images/expertise/aspnet.png"
                                            width={48}
                                            height={48}
                                            alt="ASP.NET"
                                        />
                                    </div>
                                </div>
                                <div className="w-16 flex flex-col items-center">
                                    <div className="w-[2px] h-full bg-primary" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold brightness-150">
                                    ASP.NET
                                </h4>
                                <p>
                                    In collage, I also learned to use ASP.NET to
                                    create web applications. I have since then
                                    used ASP.NET to create a variety of web
                                    applications. I mainly use ASP.NET to create
                                    backend services with Entity Framework as
                                    the ORM.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[4rem,1fr] gap-4">
                            <div className="grid grid-rows-[4rem,1fr] w-full">
                                <div className="w-16 h-16 border-2 border-primary rounded-full bg-base-300">
                                    <div className="flex h-full w-full justify-center items-center">
                                        <Image
                                            src="/images/expertise/php.png"
                                            width={40}
                                            height={40}
                                            alt="PHP"
                                        />
                                    </div>
                                </div>
                                <div className="md:hidden w-16 flex flex-col items-center">
                                    <div className="w-[2px] h-full bg-primary" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold brightness-150">
                                    PHP
                                </h4>
                                <p>
                                    I have experience with PHP from a project
                                    called{" "}
                                    <a
                                        className="link"
                                        href="/projects/pictrify"
                                    >
                                        Pictrify
                                    </a>
                                    . In this project, I created an API for the
                                    application using PHP.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid h-min">
                        <div className="grid grid-cols-[4rem,1fr] gap-4">
                            <div className="grid grid-rows-[4rem,1fr] w-full">
                                <div className="w-16 h-16 border-2 border-primary rounded-full bg-base-300">
                                    <div className="flex h-full w-full justify-center items-center">
                                        <Image
                                            src="/images/expertise/javascript.png"
                                            width={32}
                                            height={32}
                                            alt="JavaScript"
                                        />
                                    </div>
                                </div>
                                <div className="w-16 flex flex-col items-center">
                                    <div className="w-[2px] h-full bg-primary" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold brightness-150">
                                    JavaScript
                                </h4>
                                <p>
                                    I have experience with JavaScript from
                                    creating web applications with React /
                                    Next.JS and SvelteKit.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[4rem,1fr] gap-4">
                            <div className="grid grid-rows-[4rem,1fr] w-full">
                                <div className="w-16 h-16 border-2 border-primary rounded-full bg-base-300">
                                    <div className="flex h-full w-full justify-center items-center">
                                        <Image
                                            src="/images/expertise/typescript.png"
                                            width={32}
                                            height={32}
                                            alt="TypeScript"
                                        />
                                    </div>
                                </div>
                                <div className="w-16 flex flex-col items-center">
                                    <div className="w-[2px] h-full bg-primary" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold brightness-150">
                                    TypeScript
                                </h4>
                                <p>
                                    Although very similar to JavaScript, I have
                                    experience with TypeScript from creating web
                                    applications with React / Next.JS and
                                    SvelteKit. I prefer to use TypeScript over
                                    JavaScript because of the type safety, which
                                    makes it easier to work with JavaScript.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[4rem,1fr] gap-4">
                            <div className="grid grid-rows-[4rem,1fr] w-full">
                                <div className="w-16 h-16 border-2 border-primary rounded-full bg-base-300">
                                    <div className="flex h-full w-full justify-center items-center">
                                        <Image
                                            src="/images/expertise/nextjs.png"
                                            width={40}
                                            height={40}
                                            alt="Next.JS"
                                        />
                                    </div>
                                </div>
                                <div className="w-16 flex flex-col items-center">
                                    <div className="w-[2px] h-full bg-primary" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold brightness-150">
                                    Next.JS
                                </h4>
                                <p>
                                    I have experience with Next.JS from creating
                                    web applications for school and this
                                    website. I prefer to use Next.JS over React
                                    because of the server-side rendering and the
                                    file-based routing.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[4rem,1fr] gap-4">
                            <div className="w-16 h-16 border-2 border-primary rounded-full bg-base-300">
                                <div className="flex h-full w-full justify-center items-center">
                                    <Image
                                        src="/images/expertise/tailwind.png"
                                        width={40}
                                        height={40}
                                        alt="Java"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-semibold brightness-150">
                                    Tailwind CSS
                                </h4>
                                <p>
                                    I use Tailwind CSS for all of my projects
                                    because it makes it easy to create
                                    responsive and good looking websites. I
                                    prefer to use Tailwind CSS over other CSS
                                    frameworks because of large community
                                    support and simplicity. Together with
                                    Tailwind CSS, I use DaisyUI to add more
                                    components to my projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="mx-auto max-w-5xl p-4 mb-24">
                <div className="grid lg:grid-cols-3 lg:gap-16 gap-8">
                    <div>
                        <h2 className="uppercase text-3xl font-bold  brightness-150">
                            Contact Me
                        </h2>
                        <div className="bg-primary w-24 h-[0.4rem] my-2" />
                        <h3 className="text-lg">
                            Connect with me on social media
                        </h3>
                        <div className="divider"></div>
                        <div className="flex justify-center items-center gap-8">
                            <GitHubIcon className="h-7 fill-primary" />
                            <LinkedInIcon className="h-9 fill-primary" />
                        </div>
                    </div>
                    <div className="hidden col-span-2 input w-full h-full p-4 input-bordered ggrid grid-cols-2 grid-rows-[max-content, 1fr] gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="col-span-2 textarea textarea-bordered w-full h-48"
                        />
                        <button className="btn btn-primary col-span-2">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
