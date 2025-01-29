<script lang="ts">
	import { experiences } from "$assets/data/experiences";
	import House from "$assets/images/house_rawpixel.png";

	// URLs for LinkedIn and resume
	const linkedInUrl: string = "https://www.linkedin.com/in/your-profile";
	const resumeUrl: string = "/resume.pdf"; // Adjust this path to where your resume is located
	let expandedIndex: number | null = null;

	function toggleDetails(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
	}
</script>

<section class="experience">
	<h2 class="title">recent work.</h2>

	<table class="experiences">
		<tr>
			<th>Time</th>
			<th>Position</th>
		</tr>
		{#each experiences as exp}
			<tr class="experience-item">
				<td>{exp.year}</td>
				<td class="experience-title">
					{exp.position}<br />{exp.at}
				</td>
			</tr>
		{/each}
	</table>

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
		background-color: var(--color-blue);
		color: var(--color-white);
		height: 100vh;
		width: 100%;
	}

	.title {
		font-family: var(--font-oswald);
		font-size: var(--font-size-h1);
		font-weight: 700;
		padding: 5rem 1rem 0;
		text-align: right;
		text-transform: uppercase;
	}

	.experiences {
		font-family: var(--font-merriweather);
		margin: 0 2rem;
		width: 100%;
		border-collapse: collapse;
	}
	.experiences .experience-item {
		border: 1.5px solid var(--color-white);
		padding: 0.5rem;
	}

	.experience-item {
		font-size: var(--font-size-h5);
		text-transform: capitalize;
	}

	.experience-title {
		flex-wrap: wrap;
		font-size: var(--font-size-h4);
		font-weight: 300;
		line-height: 0.95;
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
