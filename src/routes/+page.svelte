<script>
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>tieulam thai</title>
	<meta name="tieulam thai" content="personal website" />
</svelte:head>

<section>
	<h1>hi, welcome</h1>

	<nav class="menu">
		<ul>
			<li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
				<a href="/about">my name is Tieulam</a>
			</li>
			<li aria-current={$page.url.pathname === "/experience" ? "page" : undefined}>
				<a href="/about">work experience</a>
			</li>
			<li aria-current={$page.url.pathname === "/fun" ? "page" : undefined}>
				<a href="/about">for fun</a>
			</li>
			<li>contacts</li>
		</ul>
	</nav>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.menu ul {
		list-style-type: none;
	}
</style>
