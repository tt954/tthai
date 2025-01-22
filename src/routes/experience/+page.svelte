<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import Dominos from "$lib/images/dominos.jpg";

	// List of work experience
	interface Experience {
		position: string;
		at: string;
		year: string;
		image: string;
	}

	const experiences: Experience[] = [
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

	// URLs for LinkedIn and resume
	const linkedInUrl: string = "https://www.linkedin.com/in/your-profile";
	const resumeUrl: string = "/resume.pdf"; // Adjust this path to where your resume is located
	let expandedIndex: number | null = null;

	function toggleDetails(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
	}
</script>

<Navbar />

<section class="experience">
	<h2 class="title">recent <br /> experience.</h2>

	<ul class="experiences">
		{#each experiences as exp, index}
			<li class="experience-item">
				<h3 class="experience-title">
					{exp.position}<br />{exp.at}
					<i class="fas fa-chevron-down" on:click={() => toggleDetails(index)}></i>
				</h3>
				{#if expandedIndex === index}
					<div class="experience-details">
						<img class="experience-image" src={exp.image} alt="{exp.at} logo" />
						<p>{exp.year}</p>
					</div>
				{/if}
			</li>
		{/each}
	</ul>

	<div class="icons">
		<a href={linkedInUrl} target="_blank" title="LinkedIn Profile">
			<i class="fab fa-linkedin"></i>
		</a>
		<a href={resumeUrl} target="_blank" title="Download Resume">
			<i class="fas fa-file-pdf"></i>
		</a>
	</div>

	<button>HELLO</button>
</section>

<style>
	.experience {
		border-left: 2px solid var(--color-black);
		margin-left: 15%;
		padding-left: 3rem;
	}

	.title {
		font-size: var(--font-size-h1);
		font-weight: 700;
		line-height: 0.9;
		margin: 5rem 0 2rem;
		text-transform: uppercase;
	}

	.experience-item {
		border-top: 1px solid var(--color-black);
		display: flex;
		justify-content: space-between;
		font-size: var(--font-size-h5);
		padding-top: 1rem;
		text-transform: uppercase;
	}

	.experience-title {
		flex-wrap: wrap;
		font-size: var(--font-size-h3);
		font-weight: 300;
		line-height: 0.95;
		margin-right: 2rem;
		width: 45%;
	}

	.experience-details {
		display: flex;
	}

	.experience-details > p {
		width: 35%;
	}

	.experience-image {
		width: 250px;
		height: 312.5px;
		background: grey;
	}

	ul {
		list-style: none;
		padding: 0;
	}
	li {
		font-size: 18px;
		margin-bottom: 10px;
	}
	.icons {
		margin-top: 20px;
		display: flex;
		gap: 20px;
	}
	a {
		color: #333;
		font-size: 2rem;
		text-decoration: none;
	}
	a:hover {
		color: #0077b5; /* LinkedIn color */
	}
	i.fas.fa-file-pdf {
		color: red;
	}
</style>
