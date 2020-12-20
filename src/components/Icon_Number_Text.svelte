<script>
  export let icon, title, text;
</script>

<div class="item">
  <div class="icon">
    <svelte:component this="{icon}" />
  </div>
  {#if title}
    <div class="h2-no-border">{title}</div>
  {/if}
  <div class="caption">{text}</div>
</div>

<style>
  .icon {
    margin-bottom: 15px;
  }
  .caption {
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  @media only screen and (min-width: 960px) {
    .caption {
      font-size: 14px;
      line-height: 17px;
    }
  }
</style>
