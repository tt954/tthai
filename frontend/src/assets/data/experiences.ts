export interface Experience {
	position: string;
	at: string;
	year: string;
	description?: string;
}

export const experiences: Experience[] = [
	{
		position: "Software \n Engineer",
		at: "Domino's",
		year: "Jan 2022 - Jan 2025",
	},
	{
		position: "Front End" + "\n" + "Engineer",
		at: "United Wholesale Mortgage",
		year: "June 2021 - Dec 2021",
	},
	{
		position: "Web Developer",
		at: "Schedulicity",
		year: "June 2020 - June 2021",
	},
];
