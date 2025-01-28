<script lang="ts">
	export let title: string;
	export let imageUrl: string | undefined;
	export let href: string;
	export let description: string;

	import CardDefaultImage from "$assets/images/tech_default.jpg";
</script>

<div class="card">
	<img class="card-image" src={imageUrl ? imageUrl : CardDefaultImage} alt={title} />

	<div class="card-header">
		<div class="card-title">
			<h2>{title} <span>—</span></h2>
			<p>{description}</p>
		</div>
		<a class="card-link" {href} target="_blank" rel="noopener noreferrer">
			<i class="fa-sharp-duotone fa-solid fa-arrow-up-right-from-square"></i>
		</a>
	</div>
</div>

<style>
	.card-image {
		height: 425px;
		width: 100%;
		object-fit: cover;
	}

	.card {
		border: 1px solid var(--color-purple);
		color: var(--color-brown);
		display: flex;
		flex-direction: column;
		padding: 0.75rem;
		height: 100%;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
	}

	.card-title {
		font-size: var(--font-size-body);
		font-family: var(--font-merriweather);
		line-height: 1.2;
	}
	.card-title h2 {
		font-family: var(--font-poppins);
		margin-top: 0.25rem;
	}
	.card-title span {
		font-weight: 300;
	}

	.card-link {
		display: inline-block;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-purple);
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
