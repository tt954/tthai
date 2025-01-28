<script>
	import Folder from "$components/Folder.svelte";
</script>

<svelte:head>
	<title>tieulam thai</title>
	<meta name="tieulam thai" content="personal website" />
</svelte:head>

<section class="hero">
	<div class="hero-header">
		<h1 class="hero-title">software engineer</h1>
		<h2 class="hero-name">( tiffany thai )</h2>
	</div>

	<ul class="experience">
		<li><Folder href="/experience" label="work" /></li>
		<li><Folder href="/fun" label="fun" /></li>
	</ul>

	<div class="footer">
		<div class="footer-contact">
			<p>+1 817 881 1459</p>
			<p>tiffany11459@gmail.com preferred</p>
		</div>
		<div class="footer-links">
			<p>2025 portfolio</p>
			<p>(✿)</p>
		</div>
	</div>
</section>

<style>
	section.hero {
		align-items: center;
		color: var(--color-blue);
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
		margin: 0 auto;
		padding: 7.25rem 1rem;
		text-align: center;
		width: max-content;
	}

	.hero-title {
		font-family: var(--font-oswald);
		font-size: 7.5rem;
		font-weight: 400;
		line-height: 1.25;
		text-transform: capitalize;
	}
	.hero-name {
		font-family: var(--font-merriweather);
		font-size: 2.5rem;
		font-style: italic;
		font-weight: 300;
	}

	.experience {
		display: flex;
		list-style: none;
		gap: 1rem;
	}

	.footer {
		align-items: flex-end;
		display: flex;
		font-family: var(--font-oswald);
		font-size: var(--font-size-h4);
		justify-content: space-between;
		text-transform: uppercase;
		width: 100%;
	}
	.footer-contact {
		text-align: left;
	}
	.footer-links {
		display: flex;
		gap: 1rem;
	}
</style>
