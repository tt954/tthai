<script lang="ts">
  export let data;
  let { posts } = data;
</script>

<main>
  {#if posts && posts.length}
    <ul>
      {#each posts as post}
      <li>{post.title}</li>
      {/each}
    </ul>
  {:else}
    <p>No posts.</p>
  {/if}
</main>