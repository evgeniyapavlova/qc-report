<script>
  const langs = [{ name: 'EN' }, { name: 'RU' }];
</script>

<div class="langs">
  {#each langs as lang}
    <div class="lang {lang.name === 'RU' ? 'active' : ''}">{lang.name}</div>
  {/each}
</div>

<style>
  .langs {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: rgba(255, 255, 255, 0.8);
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-right: 90px;
  }
  .lang {
    margin-right: 10px;
    cursor: pointer;
  }
  .lang:hover,
  .lang.active {
    color: #fff;
  }
  @media only screen and (max-width: 1124px) {
    .langs {
      margin-right: 24px;
    }
  }
</style>
