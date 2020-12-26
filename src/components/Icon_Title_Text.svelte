<script>
  export let icon, title, text;
</script>

<div class="item">
  <div class="icon">
    <svelte:component this="{icon}" />
  </div>
  {#if title}
    <h5>{@html title}</h5>
  {/if}
  <p>{@html text}</p>
</div>

<style>
  h5 {
    margin: 18px 0;
  }
</style>
