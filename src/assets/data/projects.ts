export interface Project {
	title: string;
	description: string;
	link: string;
	technologies?: string[];
	imageUrl?: string;
}

export const projects: Project[] = [
	{
		title: "Project 1",
		description: "Description of project 1",
		link: "#",
		technologies: ["react", "typescript", "nodejs"],
	},
	{ title: "Project 2", description: "Description of project 2", link: "#" },
	{ title: "Project 3", description: "Description of project 3", link: "#" },
	{ title: "Project 3", description: "Description of project 3", link: "#" },
];
