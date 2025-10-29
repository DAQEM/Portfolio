import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import Education from "@/components/landing/education";
import Expertise from "@/components/landing/expertise";
import Work from "@/components/landing/work";

export default function Home() {
    return (
        <>
            <div className="absolute overflow-clip top-0 left-0 w-full h-screen -z-10">
                <div className="absolute -translate-x-[50%] -translate-y-[80%] w-full aspect-square bg-radial from-cyan-400/50 to-50% to-transparent"></div>
                <div className="absolute -translate-x-[50%] -translate-y-[65%] w-full aspect-square bg-radial from-blue-500/50 to-50% to-transparent"></div>
                <div className="absolute -translate-x-[50%] -translate-y-[40%] w-full aspect-square bg-radial from-cyan-600/50 to-50% to-transparent"></div>
                <div className="absolute -translate-x-[25%] -translate-y-[80%] w-full aspect-square bg-radial from-cyan-400/50 to-50% to-transparent"></div>
                <div className="absolute -translate-x-[25%] -translate-y-[65%] w-full aspect-square bg-radial from-blue-500/50 to-50% to-transparent"></div>
                <div className="absolute -translate-x-[25%] -translate-y-[40%] w-full aspect-square bg-radial from-cyan-600/50 to-50% to-transparent"></div>
                <div className="absolute -translate-x-[0%] -translate-y-[80%] w-full aspect-square bg-radial from-cyan-400/50 to-50% to-transparent"></div>
                <div className="absolute -translate-x-[0%] -translate-y-[65%] w-full aspect-square bg-radial from-blue-500/50 to-50% to-transparent"></div>
                <div className="absolute -translate-x-[0%] -translate-y-[40%] w-full aspect-square bg-radial from-blue-600/50 to-50% to-transparent"></div>
                <div className="absolute translate-x-[25%] -translate-y-[80%] w-full aspect-square bg-radial from-cyan-400/50 to-50% to-transparent"></div>
                <div className="absolute translate-x-[25%] -translate-y-[65%] w-full aspect-square bg-radial from-blue-500/50 to-50% to-transparent"></div>
                <div className="absolute translate-x-[25%] -translate-y-[40%] w-full aspect-square bg-radial from-cyan-600/50 to-50% to-transparent"></div>
                <div className="absolute translate-x-[50%] -translate-y-[80%] w-full aspect-square bg-radial from-cyan-400/50 to-50% to-transparent"></div>
                <div className="absolute translate-x-[50%] -translate-y-[65%] w-full aspect-square bg-radial from-blue-500/50 to-50% to-transparent"></div>
                <div className="absolute translate-x-[50%] -translate-y-[40%] w-full aspect-square bg-radial from-blue-600/50 to-50% to-transparent"></div>
            </div>
            <div className="my-16 flex flex-col">
                <div className="max-w-5xl mx-auto px-4 pb-24">
                    <h1 className="text-[178px] leading-[185px] font-bold">
                        Hi. I'm Kevin.
                    </h1>
                    <h2 className="text-[105px] leading-[109px] font-medium">
                        A Software Engineer.
                    </h2>
                    <p className="max-w-3xl mt-12 text-lg">
                        I'm a fullstack developer, building user-friendly web
                        applications using ASP.NET, Next.js, SvelteKit, and
                        Vue.js. I also enjoy creating Java-based Minecraft mods
                        for others to enjoy.
                    </p>
                </div>
                <About />
                <Education />
                <Work />
                <Expertise />
                <Contact />
            </div>
        </>
    );
}
