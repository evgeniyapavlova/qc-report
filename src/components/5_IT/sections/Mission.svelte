<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import content, { captions } from '../content/mission';
  import arrowBottom from '../img/arrow_bottom.svg';
</script>

<Layout>
  <h5 class="red">{content[lang].h5}</h5>
  <div class="flex">
    {#each content[lang].items as item, index}
      <div class="item item-{index}">
        <div class="title">
          <div class="title-text">
            {@html item.title}
          </div>
          {#if index !== 5}
            <div class="svg-wrap svg-wrap-mission">
              <svelte:component this="{arrowBottom}" />
            </div>
          {/if}
        </div>
        <div class="content">
          <div class="text">{item.text}</div>
          <img
            src="{`ASSET_PREFIX/assets/it/img${index + 1}.jpg`}"
            alt="Amaiz"
          />
          <div class="refresh small-text">
            <span>{captions[lang].cap1}</span>{item.refresh}
          </div>
          <div class="responsible small-text">
            <span>{captions[lang].cap2}</span>{item.responsible}
          </div>
          <div class="caption">{item.caption}</div>
        </div>
      </div>
    {/each}
  </div>
</Layout>

<style>
  .flex {
    margin-bottom: 100px;
  }
  h5 {
    margin-bottom: 160px;
  }
  .title-text {
    margin-bottom: 70px;
  }
  img {
    width: 100%;
    max-width: 345px;
    transform: translateY(-50%);
  }
  .title {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    width: 100px;
    min-width: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: rgba(50, 62, 72, 0.5);
    display: none;
  }
  .small-text {
    font-size: 13px;
    line-height: 16px;
  }
  span {
    color: rgba(50, 62, 72, 0.5);
    display: block;
  }
  .caption {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 70px;
  }
  .item {
    display: flex;
    margin-bottom: 80px;
  }
  .refresh {
    margin-bottom: 13px;
    margin-top: -40px;
  }
  .responsible {
    margin-bottom: 35px;
  }
  .svg-wrap {
    flex-grow: 1;
    position: relative;
    display: flex;
    align-items: flex-end;
  }
  .svg-wrap:after {
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    background-color: var(--red);
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
  @media only screen and (min-width: 480px) {
    .title {
      width: 150px;
      min-width: 150px;
    }
    img {
      transform: none;
      margin-top: -130px;
    }
    .refresh {
      margin-top: 0;
    }
    .caption {
      margin-bottom: 100px;
    }
  }
  @media only screen and (min-width: 960px) {
    h5 {
      margin-bottom: 70px;
    }
    .title {
      font-size: 14px;
      line-height: 17px;
    }
    .caption {
      font-size: 16px;
      line-height: 19px;
    }
    .text {
      display: block;
    }
  }
  @media only screen and (min-width: 960px) {
    .flex {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .item {
      display: block;
      width: calc(33% - 20px);
    }
    img {
      margin-top: 0;
    }
    .title-text {
      margin-bottom: 9px;
    }
    .text {
      margin-bottom: 17px;
    }
    .title {
      text-align: left;
      flex-direction: row;
      width: 100%;
      min-height: 34px;
    }
    .text {
      min-height: 51px;
    }
    .caption {
      margin-bottom: 0;
      padding-bottom: 20px;
    }
    .svg-wrap:after {
      content: none;
    }
    :global(.svg-wrap-mission svg path) {
      fill: transparent;
    }
    .refresh {
      margin-top: 13px;
    }
    .svg-wrap {
      background: url(ASSET_PREFIX/assets/svg/arrow-h.svg) no-repeat right
        center;
      height: 12px;
      top: -3px;
      margin-left: 15px;
    }
    .item-2 {
      position: relative;
    }
    .item-2 .svg-wrap:after {
      content: '';
      display: block;
      height: 2px;
      width: 180px;
      top: 4px;
      right: 0;
      left: auto;
      transform: none;
    }
    .item-2 .svg-wrap {
      background: none;
    }
    .item-2:before,
    .item-2:after {
      content: '';
      display: block;
      position: absolute;
    }
    .item-2:before {
      bottom: -66px;
      width: calc(100% * 3);
      border-top: 2px solid var(--red);
      height: 50px;
      right: -20px;
      border-left: 2px solid var(--red);
    }
    .item-2:after {
      right: -20px;
      width: 20px;
      height: 100%;
      border: 2px solid var(--red);
      border-left: none;
      top: 12px;
    }
    .item {
      margin-bottom: 70px;
    }
  }
</style>
