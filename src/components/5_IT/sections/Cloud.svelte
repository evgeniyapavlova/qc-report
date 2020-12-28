<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Col2 from '../../Col2_5_6.svelte';
  import content, { icons } from '../content/cloud';
</script>

<section>
  <Layout>
    <div class="wrap">
      <div class="text">
        <h3>
          {@html content[lang].h3}
        </h3>
        <p>
          {@html content[lang].p}
        </p>
      </div>
      <div class="map-wrap">
        <div class="map"></div>
      </div>
      <Col2>
        <div slot="right">
          <div class="quote">{content[lang].quote}</div>
        </div>
        <div slot="left">
          <div class="list">
            {#each content[lang].items as item, index}
              <div class="item-wrap">
                <Icon_Title_Text
                  icon="{icons[index]}"
                  title="{item.title}"
                  text="{item.text}"
                />
              </div>
            {/each}
          </div>
        </div>
      </Col2>
    </div>
  </Layout>
</section>

<style>
  section {
    overflow: hidden;
  }
  .wrap {
    position: relative;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    max-width: 350px;
    padding: 0 17px;
    margin-bottom: 75px;
  }
  h3 {
    margin-bottom: 19px;
  }
  .map-wrap {
    margin: 30px -24px 25px;
    width: calc(100% + 48px);
  }
  .map {
    width: 100%;
    background: url(ASSET_PREFIX/assets/it/map_small.jpg) no-repeat center
      center;
    background-size: 100% auto;
    padding-bottom: 128%;
  }
  .quote {
    margin-bottom: 115px;
    max-width: 440px;
  }
  @media only screen and (min-width: 550px) {
    .map {
      background-image: url(ASSET_PREFIX/assets/it/map.jpg);
      padding-bottom: 51%;
    }
  }
  @media only screen and (min-width: 960px) {
    .wrap {
      padding-top: 40px;
      padding-bottom: 200px;
    }
    .text {
      margin: 0 0 0 auto;
      width: 50%;
    }
    .quote {
      margin-top: 300px;
      margin-bottom: 0;
    }
    .list,
    .quote,
    .text {
      position: relative;
      z-index: 1;
    }
    .list {
      text-align: left;
      justify-content: space-between;
      margin-top: 90px;
    }
    .item-wrap {
      padding: 0 20px 0 0;
      margin-bottom: 0;
      width: 50%;
    }
    .map-wrap {
      position: absolute;
      right: 16%;
      width: 1075px;
      z-index: 0;
      top: -40px;
    }
  }
</style>
