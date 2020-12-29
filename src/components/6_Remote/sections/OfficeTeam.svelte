<script>
  export let lang;
  import { content, icons1, icons2, photos } from '../content/officeteam';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Layout from '../../Layout.svelte';
  import Carousel from '../../Carousel.svelte';
  import Col2 from '../../Col2.svelte';
  const abdukarimova = {
    name: 'Vera-Nika Abdukarimova',
    position: 'Head of Office Administration',
    photo: 'abdukarimova',
  };
</script>

<section>
  <Layout>
    <H2_Text_Avatar
      h2="Office Team & CCD"
      person="{abdukarimova}"
      text="{content[lang].desc}"
    />
    <div class="col-wrap">
      <Col2>
        <div slot="right">
          <p>{content[lang].text}</p>
        </div>
        <div slot="left">
          <div class="quote">
            {@html content[lang].quote}
          </div>
        </div>
      </Col2>
    </div>
    <h5>{content[lang].title2}</h5>
    <div class="list">
      {#each content[lang].items as item, index}
        <div class="item-wrap">
          <Icon_Number_Text
            icon="{icons1[index].icon}"
            title="{icons1[index].number}"
            text="{item}"
          />
        </div>
      {/each}
    </div>
    <Carousel
      folder="office_team"
      imagesSrc="{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}"
    />
    <div class="list2">
      {#each content[lang].items2 as item, index}
        <div class="item-wrap2">
          <Icon_Title_Text
            icon="{icons2[index]}"
            title="{item.title}"
            text="{item.text}"
          />
        </div>
      {/each}
    </div>
  </Layout>
</section>

<style>
  section {
    padding-top: 200px;
  }
  p {
    margin: 45px 0 75px;
  }
  .quote {
    max-width: 400px;
  }
  .col-wrap {
    margin-bottom: 80px;
  }
  h5 {
    margin-bottom: 60px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-bottom: 100px;
  }
  .list2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  .item-wrap {
    width: 160px;
    margin-bottom: 40px;
    padding: 0 17px;
  }
  .item-wrap2 {
    width: 290px;
    margin-bottom: 75px;
    padding: 0 17px;
  }
  @media only screen and (min-width: 800px) {
    .list {
      flex-wrap: nowrap;
      text-align: left;
      justify-content: flex-start;
      margin-bottom: 60px;
    }
    .item-wrap {
      padding: 0 30px 0 0;
    }
  }
  @media only screen and (min-width: 900px) {
    .item-wrap2 {
      width: 25%;
      padding: 0 20px 0 0;
    }
    .list2 {
      text-align: left;
      justify-content: flex-start;
    }
  }
  @media only screen and (min-width: 960px) {
    p {
      margin: 0;
    }
    .col-wrap {
      margin: 80px 0 37px;
    }
    .item-wrap {
      width: 185px;
      padding-right: 60px;
    }
  }
</style>
