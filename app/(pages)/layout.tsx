import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../_components/Navbar";
import "../globals.css";
import Footer from "../_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kevin's Portfolio",
    description: "This is Kevin's portfolio",
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
