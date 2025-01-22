<script>
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Navbar />

<section class="about">
	<h2>About Me</h2>
	<p class="objective"></p>

	<h3>Likes</h3>
	<p>
		escape rooms, todo lists, personality tests (INFJs stand up), cooking, Korean boy band Seventeen
	</p>
	<h3>Dislikes</h3>
	<p>bittermelon, meetings that could have been emails, the rain when I'm outside, wet socks</p>
</section>

<style>
	section.about {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
		background-color: #f9f9f9;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-size: 2.5rem;
		color: #333;
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 1.5rem;
		color: #555;
		margin-top: 2rem;
	}

	p {
		font-size: 1.2rem;
		color: #666;
		line-height: 1.6;
		margin: 0.5rem 0;
	}

	.objective {
		font-style: italic;
		color: #888;
	}
</style>
