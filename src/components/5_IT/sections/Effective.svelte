<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import List1 from '../../List1.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Col2 from '../../Col2_3.svelte';
  import content, {
    texts1,
    numbers,
    icons,
    icons2,
  } from '../content/effective';
</script>

<Layout>
  <Col2>
    <div slot="right">
      <h3>
        {@html content[lang].h3}
      </h3>
      <p class="p1">
        {@html content[lang].p1}
      </p>
      <h5 class="h5_1">{content[lang].h5}</h5>
      <p class="p2">
        {@html content[lang].p2}
      </p>
      <div class="quote">
        {@html content[lang].quote}
      </div>
    </div>
    <div slot="left">
      <div class="list">
        {#each texts1 as item, index}
          <div class="item-wrap">
            <Icon_Number_Text
              icon="{icons[index]}"
              title="{numbers[index]}"
              text="{item}"
            />
          </div>
        {/each}
      </div>
    </div>
  </Col2>
  <h5 class="h5_2">{content[lang].h5_2}</h5>
  <div class="list-wrap">
    <List1
      icons="{icons2}"
      titles="{content[lang].titles}"
      texts="{content[lang].texts}"
    />
  </div>
</Layout>

<style>
  .list-wrap {
    margin-bottom: 70px;
  }
  .h5_2 {
    margin: 110px 0 90px;
    text-align: center;
  }
  h3 {
    margin-bottom: 55px;
  }
  .h5_1 {
    margin: 60px 0 18px;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    width: 50%;
    max-width: 190px;
    padding: 0 10px;
    margin-bottom: 60px;
  }
  .quote {
    margin: 70px 0;
    max-width: 530px;
  }

  @media only screen and (min-width: 480px) {
    .item-wrap {
      width: 25%;
    }
  }
  @media only screen and (min-width: 960px) {
    .h5_2 {
      margin: 0 0 55px 0;
      text-align: left;
    }
    .h5_1 {
      margin-top: 140px;
    }
    .quote {
      margin: 110px 0;
    }
    .list {
      justify-content: flex-start;
      text-align: left;
    }
    .item-wrap {
      width: 50%;
      margin-bottom: 43px;
    }
    .list-wrap {
      margin-bottom: 145px;
    }
  }
</style>
