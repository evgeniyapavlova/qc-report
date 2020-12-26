<script>
  export let icon, title, text;
</script>

<div class="icon">
  <svelte:component this="{icon}" />
</div>
{#if title}
  <div class="h2-no-border">{title}</div>
{/if}
<p>
  {@html text}
</p>

<style>
  .icon {
    margin-bottom: 10px;
  }
  .h2-no-border {
    margin: 18px 0 8px;
  }
  p {
    max-width: 240px;
  }
</style>
