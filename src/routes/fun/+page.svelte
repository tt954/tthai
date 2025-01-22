<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import Card from "$lib/components/Card.svelte";

	interface Project {
		title: string;
		description: string;
		link: string;
		technologies?: string[];
		imageUrl?: string;
	}

	const projects: Project[] = [
		{ title: "Project 1", description: "Description of project 1", link: "#" },
		{ title: "Project 2", description: "Description of project 2", link: "#" },
		{ title: "Project 3", description: "Description of project 3", link: "#" },
	];
</script>

<Navbar />

<section class="projects">
	<h2>Projects</h2>
	<div class="project-list">
		{#each projects as project}
			<Card
				title={project.title}
				description={project.description}
				href={project.link}
				technologies={project.technologies}
				imageUrl={project.imageUrl}
			/>
		{/each}
	</div>
</section>

<style>
	.projects {
		padding: 20px;
	}
	.project-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
