<script>
  export let dataArray;
  import LineNumberItem from './LineNumberItem.svelte';
</script>

<div class="numbers numbers-main">
  {#each dataArray as item}
    <LineNumberItem {...item} />
  {/each}
</div>

<style>
  .numbers {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  :global(.numbers-main > div) {
    width: 47%;
  }

  @media only screen and (min-width: 440px) {
    .numbers {
      justify-content: flex-start;
    }
    :global(.numbers-main > div) {
      margin: 0 20px 0 0;
    }
    :global(.numbers-main > div:last-child) {
      margin-right: 0;
    }
  }
</style>
