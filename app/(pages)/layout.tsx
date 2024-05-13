import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kevin's Portfolio",
    description:
        "My name is Kevin van der Heijden and I'm a fullstack developer with experience in building efficient and user-friendly web applications using a variety of technologies such a ASP.NET, Next.JS, SvelteKit & Vue.JS. I also love to create Minecraft mods for other people to enjoy using Java.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://kevinvanderheijden.nl",
        title: "Kevin's Portfolio",
        description:
            "My name is Kevin van der Heijden and I'm a fullstack developer with experience in building efficient and user-friendly web applications using a variety of technologies such a ASP.NET, Next.JS, SvelteKit & Vue.JS. I also love to create Minecraft mods for other people to enjoy using Java.",
        images: [
            {
                url: "https://kevinvanderheijden.nl/images/og-image.png",
                width: 1200,
                height: 600,
                alt: "Kevin's Portfolio",
            },
        ],
    },
    twitter: {
        title: "Kevin's Portfolio",
        description:
            "My name is Kevin van der Heijden and I'm a fullstack developer with experience in building efficient and user-friendly web applications using a variety of technologies such a ASP.NET, Next.JS, SvelteKit & Vue.JS. I also love to create Minecraft mods for other people to enjoy using Java.",
        creator: "@DaqEmYT",
        images: [
            {
                url: "https://kevinvanderheijden.nl/images/og-image.png",
                width: 1200,
                height: 600,
                alt: "Kevin's Portfolio",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
