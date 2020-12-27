<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H5_p from '../../H5_p.svelte';
  import Col2 from '../../Col2_5_6.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import LineNumberItem from '../../LineNumberItem.svelte';
  import content, { icons1, numbers } from '../content/peoplePartners';
  import Charts from '../components/Charts.svelte';
  import Items from '../components/Items1.svelte';
</script>

<Layout>
  <Col2 isReverse="{true}">
    <div slot="right">
      <H5_p red="{true}" h5="{content[lang].h5}" p="{content[lang].p1}" />
      <div class="list">
        {#each content[lang].items1 as item, index}
          <div class="item-wrap">
            <Icon_Number_Text icon="{icons1[index]}" text="{item}" />
          </div>
        {/each}
      </div>
    </div>
    <div slot="left">
      <div class="quote">
        {@html content[lang].quote}
      </div>
    </div>
  </Col2>
  <div class="wrap">
    <Col2>
      <div slot="right">
        <H5_p h5="{content[lang].h5_2}" p="{content[lang].p2}" />
      </div>
      <div slot="left">
        <div class="list2">
          {#each content[lang].items2 as item, index}
            <div class="item-wrap2">
              <LineNumberItem
                caption="{item}"
                period="{numbers[index].period}"
                number="{numbers[index].number}"
              />
            </div>
          {/each}
        </div>
      </div>
    </Col2>
  </div>
  <Charts />
  <Items lang="{lang}" />
</Layout>

<style>
  .list2 {
    margin-top: 95px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .item-wrap2 {
    width: calc(50% - 10px);
    margin-bottom: 23px;
  }
  .wrap {
    margin-top: 115px;
  }
  .list {
    text-align: center;
    margin-top: 90px;
  }
  .quote {
    max-width: 440px;
    margin-top: 100px;
  }
  .item-wrap {
    width: 140px;
    margin: 0 auto 65px;
  }
  @media only screen and (min-width: 400px) {
    .list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  @media only screen and (min-width: 650px) {
    .item-wrap {
      margin: 0;
    }
    .item-wrap2 {
      width: calc(33% - 10px);
    }
  }
  @media only screen and (min-width: 960px) {
    .quote {
      margin-top: 0;
    }
    .list {
      justify-content: flex-start;
      text-align: left;
      margin-top: 50px;
    }
    .wrap {
      margin-top: 140px;
    }
    .list2 {
      margin-top: 0;
    }
  }
</style>
