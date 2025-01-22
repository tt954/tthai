<script lang="ts">
	import Navbar from "$components/Navbar.svelte";
	import Card from "$components/Card.svelte";
	import { projects } from "$assets/data/projects";
</script>

<section class="projects">
	<h2 class="title">for fun</h2>

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
	.title {
		font-size: var(--font-size-h1);
		font-weight: 700;
		line-height: 0.9;
		margin: 5rem 0 0;
		text-transform: uppercase;
	}
	.project-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}
</style>
