export interface Experience {
	position: string;
	at: string;
	year: string;
	image: string;
}

import Dominos from "$assets/images/dominos.jpg";

export const experiences: Experience[] = [
	{
		position: "Software \n Engineer",
		at: "Domino's",
		year: "Jan 2022 - Present",
		image: Dominos,
	},
	{
		position: "Front End" + "\n" + "Engineer",
		at: "United Wholesale Mortgage",
		year: "June 2021 - Dec 2021",
		image: "/images/uwm.png",
	},
	{
		position: "Web Developer",
		at: "Schedulicity",
		year: "June 2020 - June 2021",
		image: "/images/schedulicity.png",
	},
];
