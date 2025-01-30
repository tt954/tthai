<script lang="ts">
	import Dominos from "$assets/images/dominos.png";
	import UWM from "$assets/images/uwm.png";
	import Schedulicity from "$assets/images/schedulicity.png";

	// URLs for LinkedIn and resume
	const linkedInUrl: string = "https://www.linkedin.com/in/your-profile";
	const resumeUrl: string = "/resume.pdf"; // Adjust this path to where your resume is located

	const experiences = [Schedulicity, UWM, Dominos];
</script>

<section class="work">
	<h2 class="title">work experience.</h2>

	<ul class="experiences">
		{#each experiences as experience}
			<li class="experience"><img src={experience} alt="work experience" /></li>
		{/each}
	</ul>

	<div class="icons">
		<a href="/" title="Home">
			<i class="fa-solid fa-home"></i>
		</a>
		<a href={linkedInUrl} target="_blank" title="LinkedIn Profile">
			<i class="fab fa-linkedin"></i>
		</a>
		<a href={resumeUrl} target="_blank" title="Download Resume">
			<i class="fa-solid fa-file-pdf"></i>
		</a>
	</div>
</section>

<style>
	.work {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		margin: 0 auto;
	}
	.title {
		color: var(--color-brown);
		font-family: var(--font-merriweather);
		font-size: var(--font-size-h1);
		font-weight: 700;
		padding: 2rem;
		text-align: right;
		text-transform: capitalize;
	}

	.experiences {
		display: flex;
		gap: 1rem;
		margin: 2rem;
		list-style: none;
	}
	.experience {
		height: 450px;
		width: 450px;
		object-fit: cover;
	}

	.icons {
		display: flex;
		align-items: center;
		margin: 0 auto;
		gap: 20px;
	}
	.icons i {
		font-size: var(--font-size-h3);
		color: var(--color-brown);
	}
</style>
