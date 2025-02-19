<script lang="ts">
	interface NavItem {
		label: string;
		href: string;
	}

	const navItems: NavItem[] = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Experience", href: "/experience" },
		{ label: "Fun", href: "/fun" },
	];
</script>

<nav>
	<ul>
		{#each navItems as item}
			<li><a href={item.href}>{item.label}</a></li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		list-style-type: none;
	}
</style>
