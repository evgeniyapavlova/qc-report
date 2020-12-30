<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H3_Text_Avatar from '../../H3_Text_Avatar.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Col2 from '../../Col2_5_6.svelte';
  const ivanov = {
    name: 'Aleksandr Ivanov',
    position: 'Chief of System Architecture',
    photo: 'ivanov',
  };
  import content from '../content/portfolio';
</script>

<Layout>
  <div class="relative-2 relative">
    <H3_Text_Avatar
      h3="{content[lang].h3}"
      person="{ivanov}"
      text="{content[lang].p}"
    />
  </div>
  <div class="relative">
    <Col2>
      <div slot="right">
        <div class="red-item-number-text">
          <Icon_Number_Text title="> 2 years" text="{content[lang].item_red}" />
        </div>
        <div class="quote">{content[lang].quote}</div>
      </div>
      <div slot="left">
        <img src="ASSET_PREFIX/assets/it/portfolio.jpg" alt="Portfolio" />
      </div>
    </Col2>
  </div>
</Layout>

<style>
  .relative-2 {
    z-index: 2;
    margin-top: 180px;
  }
  .red-item-number-text {
    margin: 100px auto 95px;
    text-align: center;
    width: 162px;
    color: var(--red) !important;
  }
  :global(.red-item-number-text .h2-no-border) {
    color: var(--red);
  }
  .quote {
    max-width: 530px;
    margin-bottom: 38px;
    position: relative;
    z-index: 1;
  }
  img {
    width: 100%;
    max-width: 500px;
    display: block;
    margin-left: auto;
  }
  .relative {
    position: relative;
  }
  @media only screen and (min-width: 600px) {
    .red-item-number-text {
      text-align: left;
      margin: 78px 0;
    }
    img {
      margin-top: -100px;
    }
    .quote {
      margin-bottom: 200px;
    }
  }
  @media only screen and (min-width: 730px) {
    img {
      margin-top: -140px;
      position: absolute;
      right: 0;
      z-index: 0;
    }
  }
  @media only screen and (min-width: 800px) {
    img {
      top: -45px;
      margin-top: 0;
    }
  }
  @media only screen and (min-width: 960px) {
    .quote {
      margin-bottom: 0;
    }
    img {
      max-width: 670px;
      top: -90px;
    }
    .quote {
      margin-bottom: 300px;
    }
  }
  @media only screen and (min-width: 1000px) {
    .quote {
      margin-bottom: 350px;
    }
  }
</style>
