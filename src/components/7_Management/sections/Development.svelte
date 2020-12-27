<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H5_p from '../../H5_p.svelte';
  import Col2_3 from '../../Col2_3.svelte';
  import Col2 from '../../Col2.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import content, { icons1, icons2 } from '../content/development';
  const numbers = ['440', '35%', '92', '11'];
</script>

<Layout>
  <Col2_3>
    <div slot="right">
      <H5_p red="{true}" h5="{content[lang].h5}" p="{content[lang].p1}" />
    </div>
    <div slot="left">
      <div class="budget">
        <Icon_Number_Text title="$ 1 000 000" text="{content[lang].item1}" />
      </div>
    </div>
  </Col2_3>
  <Col2>
    <div slot="right" class="list">
      {#each content[lang].items1 as item, index}
        <div class="item-wrap">
          <Icon_Number_Text
            title="{numbers[index]}"
            text="{item}"
            icon="{icons1[index]}"
          />
        </div>
      {/each}
    </div>
  </Col2>
  <p class="p2">
    {@html content[lang].p2}
  </p>
  <Col2>
    <div slot="right" class="list">
      {#each content[lang].texts2 as item, index}
        <div class="item-wrap2">
          <Icon_Title_Text
            icon="{icons2[index]}"
            text="{item}"
            title="{content[lang].titles2[index]}"
          />
        </div>
      {/each}
    </div>
    <div slot="left" class="quote">
      {@html content[lang].quote}
    </div>
  </Col2>
</Layout>

<style>
  .budget {
    margin-top: 76px;
    margin-bottom: 121px;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    width: 190px;
    padding: 0 17px;
    margin-bottom: 75px;
  }
  .item-wrap2 {
    width: 100%;
    max-width: 318px;
    padding: 0 17px;
    margin-bottom: 80px;
  }
  .p2 {
    padding-top: 40px;
    margin-bottom: 80px;
  }
  .quote {
    margin-top: 40px;
    max-width: 530px;
  }
  @media only screen and (min-width: 600px) {
    .item-wrap2 {
      width: 50%;
    }
  }
  @media only screen and (min-width: 960px) {
    .quote {
      margin-top: 0;
    }
    .p2 {
      width: 58%;
      margin-bottom: 14px;
			margin-top: 90px;
    }
    .list {
      text-align: left;
      justify-content: flex-start;
    }
    .item-wrap {
      width: 25%;
      padding: 0 20px 0 0;
      margin-bottom: 0;
    }
    .budget {
      margin-top: 40px;
      margin-bottom: 100px;
    }
    .item-wrap2 {
      padding: 0 8% -0px 0;
      margin-top: 40px;
    }
  }
</style>
