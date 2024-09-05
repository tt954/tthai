<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import "./styles.css";
</script>

<div class="app">
	<Navbar />

	<main>
		<slot />
	</main>

	<footer>made by Tiffany.</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		font-family: "Playfair Display", serif; /* Elegant serif font */
		background: linear-gradient(to bottom right, #f3f4f6, #eaeff5); /* Soft gradient */
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
