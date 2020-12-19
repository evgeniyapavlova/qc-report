<script>
  export let tags = [];
</script>

<div class="caption">Huge thanks to</div>
<div class="tags">
  {#each tags as tag}
    <div class="tag">{tag}</div>
  {/each}
</div>

<style>
  .caption {
    color: var(--red);
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 40px;
  }
  .tag {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: rgba(50, 62, 72, 0.6);
    text-align: center;
    padding: 7px 14px 6px;
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 10px;
  }
</style>
