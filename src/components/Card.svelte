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
	<div class="card-header">
		<div class="card-title">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
		<a class="card-link" {href} target="_blank" rel="noopener noreferrer">
			<i class="fa-sharp-duotone fa-solid fa-arrow-up-right-from-square"></i>
		</a>
	</div>

	<div>
		<img class="card-image" src={imageUrl ? imageUrl : CardDefaultImage} alt={title} />
		{#if technologies}
			<ul class="card-technologies">
				{#each technologies as tech}
					<p>{tech}</p>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.card-image {
		height: 200px;
		width: 100%;
		object-fit: cover;
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		height: 500px;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
	}

	.card-title {
		font-size: var(--font-size-h5);
		line-height: 1.2;
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

	.card-technologies {
		display: flex;
		gap: 0.5rem;
		list-style-type: none;
		overflow-x: scroll;
		padding: 0.25rem 0 0;
		text-transform: uppercase;
	}
</style>
