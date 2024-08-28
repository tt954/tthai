<script lang="ts">
	// List of work experience
	interface Experience {
		company: string;
		year: string;
	}

	const experiences: Experience[] = [
		{ company: "Domino's", year: "2022 - Present" },
		{ company: "United Wholesale Mortgage", year: "2022" },
		{ company: "Schedulicity", year: "2020 - 2021" },
	];

	// URLs for LinkedIn and resume
	const linkedInUrl: string = "https://www.linkedin.com/in/your-profile";
	const resumeUrl: string = "/resume.pdf"; // Adjust this path to where your resume is located
</script>

<section class="experience">
	<h2>My Experience</h2>
	<ul>
		{#each experiences as exp}
			<li>{exp.company} {exp.year}</li>
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
</section>

<style>
	.experience {
		padding: 20px;
	}
	h2 {
		margin-bottom: 20px;
		font-size: 24px;
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
