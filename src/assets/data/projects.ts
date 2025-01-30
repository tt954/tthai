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
		description:
			"Wavetape is a full-stack music streaming platform inspired by SoundCloud, offering users an intuitive experience to explore, play, and manage tracks seamlessly.",
		link: "https://github.com/tt954/wavetape",
		imageUrl: Tape,
	},
	{
		title: "Open fridge",
		description:
			"openFridge helps you turn everyday ingredients into delicious meals. Whether you're out of dinner ideas or wondering what to do with leftovers, simply enter what's in your kitchen and discover fresh, inspiring recipes.",
		link: "https://github.com/gorterd/open-fridge",
		imageUrl: Fish,
	},
	{
		title: "Trivia",
		description:
			"Trivia Quest is a fun and dynamic quiz game where players test their knowledge across a variety of topics. Powered by a rich question database, it offers an engaging user experience with sleek, modern UI elements.",
		link: "https://github.com/tt954/trivia",
		imageUrl: QuestionMark,
	},
	{
		title: "Celestial Match!",
		description:
			"Inspired by the classic Set! card game, Celestial Match invites players to test their pattern-recognition skills in a universe filled with suns, moons, and stars. Players must identify sets based on shape, color, and quantity combinations, creating an engaging and challenging gameplay experience.",
		link: "https://github.com/tt954/match",
		imageUrl: Ace,
	},
];
