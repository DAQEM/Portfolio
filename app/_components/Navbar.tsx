"use client";

import { Icon } from "@iconify/react";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";
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
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
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
                            <details>
                                <summary>My Work</summary>
                                <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
                                    <li>
                                        <a href="/projects">All</a>
                                        <ul>
                                            <li>
                                                <a href="/projects?tags=csharp">
                                                    <Icon
                                                        icon="devicon-plain:csharp"
                                                        className="w-4 h-4"
                                                    />
                                                    C#
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/projects?tags=typescript">
                                                    <Icon
                                                        icon="devicon-plain:typescript"
                                                        className="w-4 h-4"
                                                    />
                                                    TypeScript
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="/projects?tags=nextjs">
                                                            <Icon
                                                                icon="devicon-plain:nextjs"
                                                                className="w-4 h-4"
                                                            />
                                                            React / Next.JS
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/projects?tags=sveltekit">
                                                            <Icon
                                                                icon="devicon-plain:svelte"
                                                                className="w-4 h-4"
                                                            />
                                                            Svelte / SvelteKit
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/projects?tags=java">
                                                    <Icon
                                                        icon="devicon-plain:java"
                                                        className="w-4 h-4"
                                                    />
                                                    Java
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/projects?tags=php">
                                                    <Icon
                                                        icon="devicon-plain:php"
                                                        className="w-4 h-4"
                                                    />
                                                    PHP
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>School</a>
                                        <ul>
                                            <li>
                                                <a href="/projects?tags=individual">
                                                    <Icon
                                                        icon="fa6-solid:user"
                                                        className="w-4 h-4"
                                                    />
                                                    Individual
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/projects?tags=group">
                                                    <Icon
                                                        icon="fa6-solid:users"
                                                        className="w-4 h-4"
                                                    />
                                                    Group
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>Minecraft</a>
                                        <ul>
                                            <li>
                                                <a href="/projects?tags=librarymods">
                                                    <Icon
                                                        icon="fluent:library-32-filled"
                                                        className="w-4 h-4"
                                                    />
                                                    Library Mods
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/projects?tags=contentmods">
                                                    <Icon
                                                        icon="mdi:minecraft"
                                                        className="w-4 h-4"
                                                    />
                                                    Content Mods
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/projects?tags=utilitymods">
                                                    <Icon
                                                        icon="fluent:wrench-24-filled"
                                                        className="w-4 h-4"
                                                    />
                                                    Utility Mods
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>Misc</a>
                                        <ul>
                                            <li>
                                                <a href="/projects?tags=discordbots">
                                                    <Icon
                                                        icon="devicon-plain:discordjs"
                                                        className="w-4 h-4"
                                                    />
                                                    Discord Bots
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/projects?tags=websites">
                                                    <Icon
                                                        icon="gg:website"
                                                        className="w-4 h-4"
                                                    />
                                                    Branding sites
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/projects?tags=apis">
                                                    <Icon
                                                        icon="carbon:microservices-1"
                                                        className="w-4 h-4"
                                                    />
                                                    Microservices
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </details>
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
