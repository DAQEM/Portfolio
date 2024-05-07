"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const ProjectCard = (props: { project: Project; tags: string[] }) => {
    const tagsSearchParam =
        props.tags && props.tags.length > 0
            ? new URLSearchParams([["tags", props.tags.join(",")]]).toString()
            : undefined;

    return (
        <a
            href={`/projects/${props.project.slug}${
                tagsSearchParam ? "?" + tagsSearchParam : ""
            }`}
            className="grid grid-cols-[96px,1fr] p-4 bg-base-100 rounded-xl gap-8 border-opacity-35"
        >
            <div className="flex justify-center items-center w-24 h-24 rounded-2xl overflow-hidden">
                <Image
                    className=""
                    src={props.project.logo}
                    alt={props.project.title}
                    width={96}
                    height={96}
                />
            </div>
            <div className="grid gap-2">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">
                        {props.project.title}
                    </h2>
                    <div className="flex gap-2">
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
                <div className="flex gap-2">
                    {props.project.tags.map((tag) => (
                        <span key={tag} className="badge badge-primary">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
