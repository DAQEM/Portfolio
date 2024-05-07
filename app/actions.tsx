"use server";

import { redirect } from "next/navigation";

export const updateFilters = async (formData: FormData) => {
    const tags = formData.getAll("tags[]");

    if (tags && tags.length > 0) {
        const params = new URLSearchParams([["tags", tags.join(",")]]);
        redirect(`/projects?${params.toString()}`);
    }

    console.log("No tags selected");

    redirect("/projects");
};
