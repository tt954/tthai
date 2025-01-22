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
	<h1>Tiffany Thai</h1>

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
			<li>
				<a href="#" on:click|preventDefault={toggleContacts}>Contacts</a>
			</li>
			{#if isExpanded}
				<li class="contact-info">
					<span>{email}</span>
					<button on:click={copyEmail} title="Copy Email">
						{#if isCopied}
							<i class="fas fa-check"></i>
						{:else}
							<i class="fas fa-copy"></i>
						{/if}
					</button>
				</li>
			{/if}
		</ul>
	</nav>
</section>

<style>
	section.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
		background-color: #f5f5f5;
		padding: 0 1rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		color: #333;
		margin-bottom: 2rem;
	}

	nav.menu ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 1.5rem;
	}

	nav.menu li {
		font-size: 1.2rem;
	}

	nav.menu a {
		text-decoration: none;
		color: #007acc;
		transition: color 0.3s;
	}

	nav.menu a:hover {
		color: #005f99;
	}

	.contact-info {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.contact-info button {
		background: none;
		border: none;
		cursor: pointer;
		color: #007acc;
	}

	.contact-info button:hover {
		color: #005f99;
	}
</style>
