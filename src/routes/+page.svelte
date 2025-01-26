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
		<li>
			<a class="folder" href="/experience">
				<div class="folder-icon">
					<i class="fa-solid fa-folder folder-open"></i>
					<i class="fa-regular fa-folder-open folder-close"></i>
				</div>
				<span class="folder-label">work</span>
			</a>
		</li>
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
	.folder {
		display: flex;
		text-decoration: none;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: max-content;
	}
	.folder-icon {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.folder-icon .folder-open,
	.folder-icon .folder-close {
		font-size: 7.5rem;
		color: var(--color-blue);
		position: absolute;
		transition: opacity 0.3s ease;
	}
	.folder-icon .folder-close {
		opacity: 0;
	}
	.folder-icon:hover .folder-open {
		opacity: 0;
	}
	.folder-icon:hover .folder-close {
		opacity: 1;
	}
	.folder-label {
		display: block;
		/* font-weight: 500; */
		font-family: var(--font-oswald);
		margin: 3.5rem;
		font-size: 1.5rem;
		color: var(--color-blue);
		text-transform: uppercase;
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

	.experience-link {
		text-decoration: none;
	}
	.experience-link:visited {
		color: inherit;
	}
</style>
