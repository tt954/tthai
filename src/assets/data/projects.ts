export interface Project {
	title: string;
	description: string;
	link: string;
	technologies?: string[];
	imageUrl?: string;
}

export const projects: Project[] = [
	{
		title: "Open fridge",
		description: "Recipe generator, never leave an ingredient behind or in the trash",
		link: "#",
		technologies: ["react", "typescript", "nodejs"],
	},
	{ title: "Project 2", description: "Description of project 2", link: "#" },
	{ title: "Project 3", description: "Description of project 3", link: "#" },
	{ title: "Project 3", description: "Description of project 3", link: "#" },
];
