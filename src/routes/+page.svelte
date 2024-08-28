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
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li>
				<a href="#" on:click|preventDefault={toggleContacts}> contacts </a>
			</li>
			{#if isExpanded}
				<li>
					<span>{email}</span>
					<button on:click={copyEmail}>{isCopied ? "Copied!" : "Copy Email"}</button>
				</li>
			{/if}
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
