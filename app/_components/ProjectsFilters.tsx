import { updateFilters } from "../actions";
import FilterCheckbox from "./FilterCheckbox";

const ProjectsFilters = (props: { tags: string[] }) => {
    return (
        <form action={updateFilters}>
            <ul className="menu">
                <li>
                    <h2 className="uppercase text-base font-semibold">
                        Technologies
                    </h2>
                    <ul>
                        <li>
                            <FilterCheckbox
                                label="C#"
                                icon="devicon-plain:csharp"
                                option="csharp"
                                defaultChecked={props.tags.includes("csharp")}
                            />
                        </li>
                        <li>
                            <FilterCheckbox
                                label="TypeScript"
                                icon="devicon-plain:typescript"
                                option="typescript"
                                defaultChecked={props.tags.includes(
                                    "typescript"
                                )}
                            />
                            <ul>
                                <li>
                                    <FilterCheckbox
                                        label="React / Next.JS"
                                        icon="devicon-plain:nextjs"
                                        option="nextjs"
                                        defaultChecked={props.tags.includes(
                                            "nextjs"
                                        )}
                                    />
                                </li>
                                <li>
                                    <FilterCheckbox
                                        label="SvelteKit"
                                        icon="devicon-plain:svelte"
                                        option="sveltekit"
                                        defaultChecked={props.tags.includes(
                                            "sveltekit"
                                        )}
                                    />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <FilterCheckbox
                                label="Java"
                                icon="devicon-plain:java"
                                option="java"
                                defaultChecked={props.tags.includes("java")}
                            />
                        </li>
                        <li>
                            <FilterCheckbox
                                label="PHP"
                                icon="devicon-plain:php"
                                option="php"
                                defaultChecked={props.tags.includes("php")}
                            />
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 className="uppercase text-base font-semibold">
                        School
                    </h2>
                    <ul>
                        <li>
                            <FilterCheckbox
                                label="Individual"
                                icon="fa6-solid:user"
                                option="individual"
                                defaultChecked={props.tags.includes(
                                    "individual"
                                )}
                            />
                        </li>
                        <li>
                            <FilterCheckbox
                                label="Group"
                                icon="fa6-solid:users"
                                option="group"
                                defaultChecked={props.tags.includes("group")}
                            />
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 className="uppercase text-base font-semibold">
                        Minecraft
                    </h2>
                    <ul>
                        <li>
                            <FilterCheckbox
                                label="Library Mods"
                                icon="fluent:library-32-filled"
                                option="librarymods"
                                defaultChecked={props.tags.includes(
                                    "librarymods"
                                )}
                            />
                        </li>
                        <li>
                            <FilterCheckbox
                                label="Content Mods"
                                icon="mdi:minecraft"
                                option="contentmods"
                                defaultChecked={props.tags.includes(
                                    "contentmods"
                                )}
                            />
                        </li>
                        <li>
                            <FilterCheckbox
                                label="Utility Mods"
                                icon="fluent:wrench-24-filled"
                                option="utilitymods"
                                defaultChecked={props.tags.includes(
                                    "utilitymods"
                                )}
                            />
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 className="uppercase text-base font-semibold">Misc</h2>
                    <ul>
                        <li>
                            <FilterCheckbox
                                label="Discord Bots"
                                icon="devicon-plain:discordjs"
                                option="discordbots"
                                defaultChecked={props.tags.includes(
                                    "discordbots"
                                )}
                            />
                        </li>
                        <li>
                            <FilterCheckbox
                                label="Branding sites"
                                icon="gg:website"
                                option="brandingsites"
                                defaultChecked={props.tags.includes(
                                    "brandingsites"
                                )}
                            />
                        </li>
                        <li>
                            <FilterCheckbox
                                label="Microservices"
                                icon="carbon:microservices-1"
                                option="microservices"
                                defaultChecked={props.tags.includes(
                                    "microservices"
                                )}
                            />
                        </li>
                    </ul>
                </li>
            </ul>
            <button type="submit" className="btn btn-primary w-full mt-4">
                Apply Filters
            </button>
        </form>
    );
};

export default ProjectsFilters;
