<script>
  const stages = [
    { img: 'ASSET_PREFIX/assets/b2b/stage1.jpg', year: '2019', title: 'Mission' },
    { img: 'ASSET_PREFIX/assets/b2b/saas.jpg', year: '2020', title: 'SaaS' },
    { img: 'ASSET_PREFIX/assets/b2b/ipo.jpg', year: '2022', title: 'Ready for IPO' },
  ];
</script>

<div class="stages">
  {#each stages as stage}
    <div class="flex">
      <div class="text">
        <div class="caption">
          <span class="year">{stage.year}</span>
          <br />
          <span class="title">{stage.title}</span>
        </div>
        {#if stage.year !== '2022'}
          <div class="arrow"></div>
        {/if}
      </div>
      <img src="{stage.img}" alt="" />
    </div>
  {/each}
</div>

<style>
  .caption {
    padding: 22px 0;
  }
  .arrow {
    width: 100%;
    height: 150px;
    background: url(ASSET_PREFIX/assets/svg/arrow.svg) no-repeat center top;
  }
  .stages {
    margin-top: 120px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  .text {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    width: 100px;
  }
  .flex {
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
  }
  .year {
    color: var(--red);
  }

  .title {
    color: var(--dark-gray);
    white-space: nowrap;
  }
  img {
    width: calc(100% - 100px);
    transform: translateY(-30%);
    max-width: 290px;
  }
  @media only screen and (min-width: 800px) {
    .stages {
      max-width: 100%;
      display: flex;
    }
    .flex {
      width: 33%;
      display: block;
    }
    img {
      width: 100%;
      transform: none;
      max-width: 100%;
    }
    .text {
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-right: 50px;
    }
    .arrow {
      height: 16px;
      width: calc(100% - 140px);
      background: url(ASSET_PREFIX/assets/svg/arrow-h.svg) no-repeat right center;
    }
    .stages {
      margin-top: 70px;
    }
  }
</style>
