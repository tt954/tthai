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
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li>
				<a href="#" on:click|preventDefault={toggleContacts}> contacts </a>
			</li>
			{#if isExpanded}
				<li class="contact-info">
					<span>{email}</span>
					<button on:click={copyEmail} title="Copy Email">
						{#if isCopied}
							<i class="fas fa-check"></i> <!-- checkmark icon -->
						{:else}
							<i class="fas fa-copy"></i> <!-- copy icon -->
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
		justify-content: center;
		align-items: center;
		flex: 0.6;
		padding: 5rem 1rem;
	}

	h1 {
		font-size: 8rem;
		font-weight: 700;
		margin-bottom: 2rem;
		letter-spacing: 0.05em;
		color: #333;
	}

	.menu ul {
		list-style-type: none;
		padding: 0;
	}

	.menu li {
		margin: 1rem 0;
	}

	.menu a {
		font-size: 1.5rem;
		font-weight: 400;
		color: #555;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.menu a:hover {
		color: #000;
	}

	.contact-info {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	button {
		padding: 5px;
		cursor: pointer;
		background: none;
		border: none;
		color: #555;
		transition: color 0.3s ease;
	}

	button:focus {
		outline: none;
	}

	button:hover {
		color: #000;
	}

	i {
		font-size: 1.5rem;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 5rem;
		}
		.menu a {
			font-size: 1.75rem;
		}
	}
</style>
