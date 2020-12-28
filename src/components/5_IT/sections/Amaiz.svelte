<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import Col2 from '../../Col2_5_7.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import content, { icons } from '../content/amaiz';
</script>

<div class="wrap">
  <Layout>
    <Col2>
      <div slot="right" class="img-wrap">
        <img src="ASSET_PREFIX/assets/it/amaiz.jpg" alt="Amaiz" />
      </div>
      <div slot="left">
        <h3>
          {@html content[lang].h3}
        </h3>
        <p>
          {@html content[lang].p}
        </p>
        <div class="quote">
          {@html content[lang].quote}
        </div>
      </div>
    </Col2>
    <div class="list">
      {#each content[lang].items as item, index}
        <div class="item-wrap">
          <Icon_Number_Text icon="{icons[index]}" text="{item}" />
        </div>
      {/each}
    </div>
  </Layout>
</div>

<style>
  .wrap {
    overflow: hidden;
  }
  .img-wrap {
    width: calc(100% + 48px);
    margin-left: -24px;
  }
  img {
    width: 100%;
    max-width: 502px;
  }
  h3 {
    margin-top: 65px;
    margin-bottom: 19px;
  }
  .quote {
    margin: 75px 0 95px;
    max-width: 530px;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    width: 190px;
    padding: 0 10px;
    margin-bottom: 55px;
  }
  @media only screen and (min-width: 500px) {
    .img-wrap {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
  }
  @media only screen and (min-width: 614px) {
    .item-wrap {
      width: 25%;
      margin-bottom: 0;
    }
    .list {
      margin-bottom: 100px;
    }
  }
  @media only screen and (min-width: 960px) {
    .quote {
      margin-bottom: 80px;
    }
    h3 {
      margin-top: 37px;
    }
    .list {
      text-align: left;
      justify-content: flex-start;
      width: 66%;
      margin: 0 0 100px auto;
    }
    .item-wrap {
      padding: 0 20px 0 0;
    }
  }
  @media only screen and (min-width: 1100px) {
    img {
      width: 502px;
      margin-left: -63px;
    }
  }
</style>
