<script lang="ts">
	import { page } from "$app/stores";

	let isExpanded: boolean = false;
	let isCopied: boolean = false;
	const email: string = "tiffany11459@gmail.com";

	function toggleContacts() {
		isExpanded = !isExpanded;
	}

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(email);
			isCopied = true;
			setTimeout(() => (isCopied = false), 2000); // reset isCopied after 2 secs
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	}
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

	<nav class="menu">
		<ul>
			<li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
				<a href="/about">About Me</a>
			</li>
			<li aria-current={$page.url.pathname === "/experience" ? "page" : undefined}>
				<a href="/experience">Experience</a>
			</li>
			<li aria-current={$page.url.pathname === "/fun" ? "page" : undefined}>
				<a href="/fun">Fun</a>
			</li>
		</ul>
	</nav>

	<div class="footer">
		<div class="footer-contact">
			<p>+1 817 881 1459</p>
			<p>tiffany11459@gmail.com preferred</p>
		</div>
		<div class="footer-extra">
			<p>2025 portfolio</p>
			<p>(✿)</p>
		</div>
	</div>
</section>

<style>
	section.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100vh;
		width: max-content;
		text-align: center;
		padding: 7.25rem 1rem;
		margin: 0 auto;
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

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		font-family: var(--font-oswald);
		font-size: var(--font-size-h4);
		text-transform: uppercase;
		width: 100%;
	}
	.footer-contact {
		text-align: left;
	}
	.footer-extra {
		display: flex;
		gap: 1rem;
	}
</style>
