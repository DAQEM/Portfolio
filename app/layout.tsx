import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

const segoeUI = localFont({
    src: "./fonts/segoeui.ttf",
    variable: "--font-segoe-ui",
});
const acorn = localFont({
    src: [
        {
            path: "./fonts/Acorn-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Acorn-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Acorn-ExtraLight.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/Acorn-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/Acorn-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/Acorn-SemiBold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/Acorn-Thin.otf",
            weight: "200",
            style: "normal",
        },
    ],
    variable: "--font-acorn",
});

export const metadata: Metadata = {
    title: "Kevin's Portfolio",
    description: "Welcome to my personal portfolio website!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${segoeUI.variable} ${acorn.variable} antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
