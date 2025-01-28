import Fish from "$assets/images/imosaic_art.jpg";
import QuestionMark from "$assets/images/art_majeur.jpg";
import Ace from "$assets/images/ace_card.jpg";
import Tape from "$assets/images/wavetape.jpg";

export interface Project {
	title: string;
	description: string;
	link: string;
	imageUrl?: string;
}

export const technologies = [
	"react",
	"typescript",
	"nodejs",
	"redux toolkit",
	"redux",
	"ruby on rails",
	"javascript",
	"nextjs",
	"chakra ui",
	"tailwindcss",
	"material ui",
];

export const projects: Project[] = [
	{
		title: "Wavetape",
		description: "A clone of SoundCloud, my first fullstack project",
		link: "#",
		imageUrl: Tape,
	},
	{
		title: "Open fridge",
		description: "Recipe generator, never leave an ingredient behind or in the trash",
		link: "#",
		imageUrl: Fish,
	},
	{ title: "Trivia", description: "Simple trivia game", link: "#", imageUrl: QuestionMark },
	{
		title: "Match!",
		description: "Inspired by Set! game but here we have sun, moon, and star",
		link: "#",
		imageUrl: Ace,
	},
];
