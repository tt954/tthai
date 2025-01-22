<script lang="ts">
	import techIcons from "$assets/data/technologies";

	export let title: string;
	export let imageUrl: string | undefined;
	export let href: string;
	export let description: string;
	export let technologies: string[] = [];

	import CardDefaultImage from "$assets/images/tech_default.jpg";
</script>

<div class="card">
	<h2>{title}</h2>
	<p class="card-description">{description}</p>

	<ul class="card-technologies">
		{#if technologies}
			{#each technologies as tech}
				<li>{@html techIcons[tech]}</li>
			{/each}
		{/if}
	</ul>

	<a class="card-link" {href} target="_blank" rel="noopener noreferrer">Visit Project</a>

	<img class="card-image" src={imageUrl ? imageUrl : CardDefaultImage} alt={title} />
</div>

<style>
	.card-image {
		height: 200px;
		width: 100%;
		object-fit: cover;
	}

	.card {
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 1.5rem;
		margin-bottom: 1.5rem;
		width: 100%;
		max-width: 500px;
		transition: box-shadow 0.3s ease;
	}

	.card:hover {
		box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
	}

	h2 {
		font-size: 1.8rem;
		margin-bottom: 0.5rem;
		color: #333;
	}

	.card-link {
		display: inline-block;
		font-size: 1rem;
		font-weight: 600;
		color: #1e88e5;
		text-decoration: none;
		margin-bottom: 1rem;
	}

	.card-link:hover {
		text-decoration: underline;
	}

	p {
		font-size: 1rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.card-technologies {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.card-technologies li {
		background-color: #f3f4f6;
		color: #333;
		padding: 0.4rem 0.8rem;
		border-radius: 6px;
		font-size: 0.9rem;
	}
</style>
