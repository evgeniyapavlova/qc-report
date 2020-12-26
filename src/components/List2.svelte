<script>
  import Icon_Number_Text from './Icon_Number_Text.svelte';
  export let titles, texts, icons;
  const length = titles.length;
</script>

<div class="list">
  {#each titles as title, index}
    <div class="item-wrap">
      <Icon_Number_Text
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
    max-width: 190px;
    padding: 0 10px;
    margin-bottom: 55px;
  }
  @media only screen and (min-width: 960px) {
    .list {
      text-align: left;
      justify-content: flex-start;
    }
    .item-wrap {
			width: 33%;
      padding: 0 20px 0 0;
      margin-bottom: 0;
    }
  }
</style>
