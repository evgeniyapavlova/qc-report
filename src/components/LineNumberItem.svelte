<script>
  export let period,
    number = '320 000',
    caption = 'MAU',
    icon;
</script>

<div class="item line-number-item">
  {#if icon}
    <svelte:component this="{icon}" />
  {/if}
  {#if period}
    <div class="period">
      {@html period}
    </div>
  {/if}
  <div class="number">{number}</div>
  <div class="caption">{caption}</div>
</div>

<style>
  .item {
    font-weight: bold;
    max-width: 162px;
    margin-bottom: 42px;
  }
  .period {
    color: var(--red);
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 4px;
  }
  .number {
    color: var(--dark-gray);
    font-size: 30px;
    line-height: 1;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(50, 62, 72, 0.5);
  }
  @media only screen and (min-width: 380px) {
    .number {
      font-size: 36px;
    }
  }
  @media only screen and (max-width: 959px) {
    :global(.line-number-item .period span) {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .caption {
    opacity: 0.5;
    font-size: 18px;
    line-height: 22px;
    margin-top: 9px;
  }
</style>
