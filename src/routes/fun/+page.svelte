<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";

	interface Project {
		title: string;
		description: string;
		link: string;
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
			<div class="project">
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<a href={project.link}>View Project</a>
			</div>
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
	.project {
		border: 1px solid #ccc;
		padding: 10px;
		width: calc(33.333% - 20px);
	}
</style>
