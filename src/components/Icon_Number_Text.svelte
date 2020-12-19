<script>
  export let icon, title, text;
</script>

<div class="item">
  <svelte:component this="{icon}" />
  <div class="h2-no-border">{title}</div>
  <div class="caption">{text}</div>
</div>

<style>
  .h2-no-border {
    margin-top: 15px;
    margin-bottom: 8px;
  }
  .caption {
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
