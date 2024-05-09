import { Icon } from "@iconify/react/dist/iconify.js";

const NavbarMyWork = () => {
    return (
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
    );
}

export default NavbarMyWork;