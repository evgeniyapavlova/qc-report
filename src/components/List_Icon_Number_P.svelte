<script>
  import Icon_Number_P from './Icon_Number_P.svelte';
  export let titles, texts, icons;
</script>

<div class="list">
  {#each titles as title, index}
    <div class="item-wrap">
      <Icon_Number_P
        icon="{icons[index]}"
        title="{title}"
        text="{texts[index]}"
      />
    </div>
  {/each}
</div>

<style>
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .item-wrap {
    width: 100%;
    margin-bottom: 60px;
  }
  @media only screen and (min-width: 400px) {
    .item-wrap {
      width: calc(50% - 15px);
    }
  }
  @media only screen and (min-width: 960px) {
    .item-wrap {
      width: 25%;
      padding-right: 50px;
    }
  }
</style>
