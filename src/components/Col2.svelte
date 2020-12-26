<script>
  export let isReverse = false;
</script>

<div class="flex {isReverse ? 'flex-reverse' : 'flex-normal'}">
  <div class="content">
    <slot name="right" />
  </div>
  <div class="aside">
    <slot name="left" />
  </div>
</div>

<style>
  @media only screen and (min-width: 960px) {
    .flex {
      display: flex;
      justify-content: space-between;
    }
    .flex-normal .aside {
      width: 33%;
    }
    .flex-normal .content {
      max-width: 58%;
      flex-grow: 1;
    }
    .flex-reverse .content {
      width: 33%;
    }
    .flex-reverse .aside {
      max-width: 58%;
      flex-grow: 1;
    }
    .flex-reverse {
      flex-direction: row-reverse;
    }
  }
</style>
