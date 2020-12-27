<script>
  export let lang;
  import icon4 from '../img/rise.svg';
  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import LineNumberItem from '../../LineNumberItem.svelte';
  import Col2 from '../../Col2_3.svelte';
  import content, { icons, numbers } from '../content/strategic';
  import people from '../../../helpers/people';
  const { samburova } = people;
</script>

<Layout>
  <H2_Text_Avatar
    h2="{content[lang].h2}"
    person="{samburova}"
    text="{content[lang].h4}"
  />
  <Col2>
    <div slot="right">
      <h5 class="red">
        {@html content[lang].h5}
      </h5>
      <p class="p1">
        {@html content[lang].p}
      </p>
    </div>
    <div slot="left">
      <h5 class="title-2">{content[lang].itemsTitle}</h5>
      <div class="list">
        {#each content[lang].items as item, index}
          <div class="item-wrap">
            <Icon_Number_Text icon="{icons[index]}" text="{item}" />
          </div>
        {/each}
      </div>
    </div>
  </Col2>
  <div class="wrap">
    <Col2>
      <div slot="right">
        <div class="quote">
          {@html content[lang].quote}
        </div>
        <div class="list2">
          {#each numbers as item, index}
            <div class="item-wrap2 item-wrap2-1">
              <LineNumberItem
                color="{index === 3 ? 'red' : 'gray'}"
                {...item}
              />
            </div>
          {/each}
          <div class="item-wrap2">
            <p class="p2">
              {@html content[lang].p1}
            </p>
          </div>
          <div class="item-wrap2">
            <LineNumberItem
              icon="{icon4}"
              period="3,38 Q2 <span>2020</span>"
              number="4,06"
              caption="{content[lang].text}"
            />
          </div>
        </div>
      </div>
    </Col2>
  </div>
</Layout>

<style>
  .item-wrap2 {
    width: calc(50% - 10px);
    margin-bottom: 23px;
  }
  .p2 {
    padding-top: 40px;
  }
  @media only screen and (min-width: 450px) {
    .p2 {
      padding-right: 15px;
    }
  }
  .list2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .quote {
    margin-bottom: 66px;
    max-width: 530px;
  }
  h5.red {
    margin: 100px 0 18px;
  }
  .p1 {
    margin-bottom: 140px;
  }
  .title-2 {
    text-align: center;
  }
  .list {
    margin-top: 65px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    margin-bottom: 65px;
    max-width: 210px;
    padding: 0 10px;
  }
  @media only screen and (min-width: 700px) {
    .item-wrap2 {
      width: 50%;
      padding-right: 10px;
    }
    .item-wrap2-1 {
      width: 25%;
    }
    .p2 {
      padding-top: 120px;
    }
  }
  @media only screen and (min-width: 960px) {
    .wrap {
      margin-top: -200px;
    }
    .title-2 {
      text-align: left;
      margin-top: 100px;
    }
    .list {
      margin-top: 45px;
      text-align: left;
      justify-content: flex-start;
    }
    .item-wrap {
      margin-bottom: 50px;
      padding: 0 20px 0 0;
    }
  }
</style>
