<script>
  export let lang;
  import icon1 from '../img/separate.svg';
  import icon2 from '../img/quality.svg';
  import icon3 from '../img/data_driven.svg';
  import icon4 from '../img/talents.svg';
  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Col2_5_6 from '../../Col2_6_5.svelte';
  const mikhaylova = {
    name: 'Tatyana Mikhaylova',
    position: 'HR Business Partner',
    photo: 'mikhaylova',
  };
  import content, { numbers, icons1 } from '../content/operational';
  const icons = [icon1, icon2, icon3, icon4];
</script>

<Layout>
  <H2_Text_Avatar
    h2="{content[lang].h2}"
    text="{content[lang].h4}"
    person="{mikhaylova}"
  />
  <p>
    {@html content[lang].p1}
  </p>
  <Col2_5_6>
    <div slot="right">
      <Icon_Title_Text
        icon="{icon1}"
        title="{content[lang].titles[0]}"
        text="{content[lang].texts[0]}"
      />
      <div class="chart-label">106 people was hired in Russia</div>
      <img
        class="chart1"
        src="ASSET_PREFIX/assets/management/operation_graphs_1.jpg"
        alt="106 people were hired in Russia"
      />
      <div class="chart-label">
        26 people was hired in Cyprus, Gibraltar, UK
      </div>
      <img
        class="chart2"
        src="ASSET_PREFIX/assets/management/operation_graphs_2.jpg"
        alt="26 people were hired in Cyprus, Gibraltar, UK"
      />
    </div>
    <div slot="left">
      {#each content[lang].titles as item, index}
        {#if index !== 0}
          <div class="item-wrap">
            <Icon_Title_Text
              icon="{icons[index]}"
              title="{content[lang].titles[index]}"
              text="{content[lang].texts[index]}"
            />
          </div>
        {/if}
      {/each}
    </div>
  </Col2_5_6>
  <h5>
    {@html content[lang].h5}
  </h5>
  <div class="list2">
    {#each content[lang].items2 as item, index}
      <div class="item-wrap-2">
        <Icon_Number_Text
          icon="{icons1[index]}"
          title="{numbers[index]}"
          text="{item}"
        />
      </div>
    {/each}
  </div>
</Layout>

<style>
  .chart-label {
    margin: 70px 0 18px;
  }
  p {
    margin: 80px 0 85px;
  }
  .item-wrap {
    margin-bottom: 115px;
  }
  .chart2 {
    margin-bottom: 145px;
  }
  img {
    width: 100%;
    max-width: 528px;
    display: block;
  }
  .list2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 67px;
  }
  .item-wrap-2 {
    max-width: 190px;
    padding: 0 10px;
    margin-bottom: 55px;
  }
  @media only screen and (min-width: 800px) {
    .item-wrap-2 {
      width: 20%;
    }
  }
  @media only screen and (min-width: 960px) {
    .list2 {
      justify-content: flex-start;
      text-align: left;
      margin-top: 58px;
    }
    .item-wrap-2 {
      width: 16%;
      padding: 0 20px 0 0;
    }
    p {
      margin: 65px 0 95px;
      width: 58%;
    }
    .item-wrap {
      margin-bottom: 76px;
    }
    .chart-label {
      margin-bottom: 0;
    }
  }
  @media only screen and (min-width: 1125px) {
    .item-wrap-2 {
      padding-right: 30px;
    }
  }
</style>
