import ProjectCard from "@/app/_components/ProjectCard";
import ProjectsFilters from "@/app/_components/ProjectsFilters";
import { projects as projectsData } from "@/app/_lib/data";

export default function Page({
    searchParams,
}: {
    searchParams: { tags: string };
}) {
    let projects: Project[] = projectsData;
    let tags: string[] = [];
    if (searchParams.tags) {
        tags = searchParams.tags.split(",");
        projects = projectsData.filter((project) =>
            project.tags
                .map((t) => {
                    t = t.toLowerCase();
                    t = t.replace(".", "");
                    t = t.replace(" ", "");
                    if (t === "c#") {
                        return "csharp";
                    }
                    if (t === "aspnet") {
                        return "csharp";
                    }
                    if (t === "react") {
                        return "nextjs";
                    }
                    return t;
                })
                .some((tag) => tags.includes(tag))
        );
    }

    return (
        <div className="max-w-6xl mx-auto lg:pt-16 p-4">
            <h1 className="uppercase text-4xl font-bold pb-2">Projects</h1>
            <div className="grid lg:grid-cols-[256px,1fr] gap-8">
                <div id="filters" className="bg-base-100 h-min rounded-xl p-4">
                    <ProjectsFilters tags={tags} />
                </div>
                <div id="projects">
                    <div className="grid gap-4 mb-24">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                tags={tags}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
