"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const ProjectCard = (props: { project: Project; tags: string[] }) => {
    const tagsSearchParam =
        props.tags && props.tags.length > 0
            ? new URLSearchParams([["tags", props.tags.join(",")]]).toString()
            : undefined;

    return (
        <div className="grid grid-cols-[96px,1fr] p-4 bg-base-100 rounded-xl gap-8 border-opacity-35">
            <div className="flex justify-center items-center w-24 h-24 rounded-2xl overflow-hidden">
                <a
                    href={`/projects/${props.project.slug}${
                        tagsSearchParam ? "?" + tagsSearchParam : ""
                    }`}
                >
                    <Image
                        className=""
                        src={props.project.logo}
                        alt={props.project.title}
                        width={96}
                        height={96}
                    />
                </a>
            </div>
            <div className="grid gap-2">
                <div className="grid lg:grid-cols-2 justify-between">
                    <h2 className="text-xl font-semibold link link-hover">
                        <a
                            href={`/projects/${props.project.slug}${
                                tagsSearchParam ? "?" + tagsSearchParam : ""
                            }`}
                        >
                            {props.project.title}
                        </a>
                    </h2>
                    <div className="flex lg:justify-end gap-2">
                        {props.project.source && (
                            <a
                                className="btn btn-ghost btn-sm"
                                href={props.project.source}
                            >
                                <Icon icon="mdi:github" className="w-6 h-6" />
                            </a>
                        )}
                        {props.project.link && (
                            <a
                                className="btn btn-ghost btn-sm"
                                href={props.project.link}
                            >
                                <Icon icon="mdi:web" className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
                <p>{props.project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {props.project.tags.map((tag) => (
                        <span key={tag} className="badge badge-primary w-max">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
