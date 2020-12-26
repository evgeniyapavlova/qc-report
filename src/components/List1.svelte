<script>
  import Icon_Title_Text from './Icon_Title_Text.svelte';
  export let titles, texts, icons;
  const length = titles.length;
</script>

<div class="list">
  {#each titles as title, index}
    <div class="item-wrap item-length-{length}">
      <Icon_Title_Text
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
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    max-width: 290px;
    padding: 0 17px;
    margin-bottom: 75px;
  }
  @media only screen and (min-width: 960px) {
    .list {
      text-align: left;
      justify-content: space-between;
    }
    .item-wrap {
      padding: 0 20px 0 0;
      margin-bottom: 0;
    }
    .item-length-3 {
      width: 33%;
    }
  }
</style>
