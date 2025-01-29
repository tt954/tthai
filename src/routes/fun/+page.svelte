<script lang="ts">
	import Card from "$components/Card.svelte";

	import { projects, technologies } from "$assets/data/projects";
</script>

<section class="projects">
	<div class="header">
		<h2 class="title">fun</h2>
		<ul class="technologies">
			{#each technologies as technology}
				<li><span>〇</span>{technology}</li>
			{/each}
		</ul>
	</div>

	<div class="project-list">
		{#each projects as project}
			<Card
				title={project.title}
				description={project.description}
				href={project.link}
				imageUrl={project.imageUrl}
			/>
		{/each}
	</div>
</section>

<style>
	.header {
		margin: 0 1rem 0;
		display: flex;
		align-items: center;
		line-height: 1.2;
	}
	.title {
		font-family: var(--font-poppins);
		font-size: var(--font-size-h1);
		font-weight: 700;
		text-transform: uppercase;
	}
	.technologies {
		font-family: var(--font-merriweather);
		font-size: 1.5rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 0 1rem;
	}
	.technologies li {
		list-style-type: none;
		margin-right: 0.25rem;
	}
	.technologies li span {
		font-size: var(--font-size-body);
	}

	.project-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin: 0 1rem;
	}
</style>
