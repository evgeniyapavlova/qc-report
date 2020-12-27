<script>
  export let icon, title, text;
</script>

<div class="icon">
  <svelte:component this="{icon}" />
</div>
{#if title}
  <h5>
    {@html title}
  </h5>
{/if}
<p class="p-with-links">
  {@html text}
</p>

<style>
  h5 {
    margin: 18px 0;
  }
</style>
