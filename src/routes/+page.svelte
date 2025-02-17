<script>
	import "./styles.css";
	import Folder from "$components/Folder.svelte";
</script>

<svelte:head>
	<title>tieulam thai</title>
	<meta name="tieulam thai" content="personal website" />
</svelte:head>

<main class="landing">
	<header class="header">
		<h1 class="header-title">software engineer</h1>
		<p class="header-my-name">( tiffany thai )</p>
	</header>

	<ul class="portfolio-cta">
		<li><Folder href="/work" label="work" /></li>
		<li><Folder href="/fun" label="fun" /></li>
	</ul>

	<footer>
		<div class="footer-contact">
			<p>+1 817 881 1459</p>
			<p>tiffany11459@gmail.com preferred</p>
		</div>
		<div class="footer-cta">
			<p>2025 portfolio</p>
			<p>(✿)</p>
		</div>
	</footer>
</main>

<style>
	main.landing {
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

	.header-title {
		font-family: var(--font-oswald);
		font-size: 7.5rem;
		font-weight: 400;
		line-height: 1.25;
		text-transform: capitalize;
	}
	.header-my-name {
		font-family: var(--font-merriweather);
		font-size: 2.5rem;
		font-style: italic;
		font-weight: 300;
	}

	.portfolio-cta {
		display: flex;
		list-style: none;
		gap: 1rem;
		padding: 0;
	}

	footer {
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
	.footer-cta {
		display: flex;
		gap: 1rem;
	}

	@media (max-width: 768px) {
		.header-title {
			font-size: 3rem;
		}
		.header-my-name {
			font-size: 1.5rem;
		}
		.portfolio-cta {
			flex-direction: column;
		}
		footer {
			flex-direction: column;
			align-items: center;
			font-size: var(--font-size-h5);
		}
		.footer-cta,
		.footer-contact {
			text-align: center;
		}
	}
</style>
