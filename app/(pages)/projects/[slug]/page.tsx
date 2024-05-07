import { projects } from "@/app/_lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { tags: string };
}) {
    const project = projects.find((project) => project.slug === params.slug);
    if (!project) return notFound();

    console.log(searchParams);

    return (
        <div className="p-4 max-w-6xl mx-auto lg:mt-12 mt-4">
            <div className="text-sm breadcrumbs mb-2">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a
                            href={`/projects${
                                searchParams.tags
                                    ? "?tags=" + searchParams.tags
                                    : ""
                            }`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>{project.title}</li>
                </ul>
            </div>
            <div className="grid grid-cols-[128px,1fr] grid-rows-2 lg:gap-x-8 lg:gap-y-0 gap-x-4 gap-y-4">
                <Image
                    className="lg:row-span-2 w-32 h-32 rounded-2xl overflow-hidden object-contain"
                    src={project.logo}
                    alt={project.title}
                    width={128}
                    height={128}
                />
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="lg:col-span-1 col-span-2 text-lg lg:-my-6">
                    {project.description}
                </p>
            </div>
            <div className="max-w-4xl mt-12">
                <h2 className="uppercase text-2xl font-bold">Images</h2>
                <div className="carousel w-full">
                    {project.images.map((image, index) => (
                        <div
                            key={image}
                            id={"slide" + (index + 1)}
                            className="carousel-item relative w-full"
                        >
                            <Image
                                className="w-full"
                                src={image}
                                alt={project.title}
                                width={1280}
                                height={720}
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a
                                    href={
                                        "#slide" +
                                        (index === 0
                                            ? project.images.length
                                            : index)
                                    }
                                    className="btn btn-circle"
                                >
                                    ❮
                                </a>
                                <a
                                    href={
                                        "#slide" +
                                        (index === project.images.length - 1
                                            ? 1
                                            : index + 2)
                                    }
                                    className="btn btn-circle"
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
