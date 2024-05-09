"use client";

import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
import NavbarMyWork from "./NavbarMyWork";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
    return (
        <div className="bg-base-200">
            <nav className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
                        >
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/#about">About</a>
                            </li>
                            <li>
                                <NavbarMyWork />
                            </li>
                            <li>
                                <a href="/#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex lg:gap-2 gap-4">
                        <a
                            href="https://github.com/DAQEM"
                            className="lg:btn lg:btn-ghost"
                        >
                            <GitHubIcon className="lg:h-5 h-8 fill-primary" />
                        </a>
                        <a
                            href="https://linkedin.com/in/kevinvdheijden"
                            className="lg:btn lg:btn-ghost"
                        >
                            <LinkedInIcon className="lg:h-6 h-8 fill-primary" />
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/#about">About</a>
                        </li>
                        <li>
                            <NavbarMyWork />
                        </li>
                        <li>
                            <a href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeSwitch />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
