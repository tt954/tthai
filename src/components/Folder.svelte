<script>
	export let href;
	export let label;
</script>

<a class="folder" {href}>
	<div class="folder-icon">
		<i class="fa-solid fa-folder folder-open"></i>
		<i class="fa-regular fa-folder-open folder-close"></i>
	</div>
	<span class="folder-label">{label}</span>
</a>

<style>
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
		font-family: var(--font-oswald);
		margin: 3.5rem;
		font-size: 1.5rem;
		color: var(--color-blue);
		text-transform: uppercase;
	}
</style>
