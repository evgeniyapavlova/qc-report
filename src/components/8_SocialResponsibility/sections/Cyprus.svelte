<script>
  export let lang;
  import content from '../content/cyprus';
  const bykova = {
    name: 'Olga Bykova',
    position: 'Charity document manager',
    photo: 'bykova',
  };
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Layout from '../../Layout.svelte';
  import icon1 from '../img/protection.svg';
  import icon2 from '../img/wall.svg';
  import icon3 from '../img/water.svg';
  const icons = [icon1, icon2, icon3];
  import Carousel from '../../Carousel.svelte';
</script>

<Layout>
  <H2_Text_Avatar
    h2="{content[lang].h2}"
    text="{content[lang].h4}"
    person="{bykova}"
  />
  <p>
    {@html content[lang].p}
  </p>
  <h5>
    {@html content[lang].h5}
  </h5>
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
    <Carousel
      folder="rwanda"
      imagesSrc="{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}"
    />
</Layout>

<style>
  p {
    margin: 65px 0 93px;
  }
  h5 {
    margin-bottom: 90px;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    max-width: 308px;
    padding: 0 17px;
    margin-bottom: 75px;
  }
  @media only screen and (min-width: 960px) {
    p {
      margin: 55px 0 100px;
      max-width: 58%;
    }
    h5 {
      margin-bottom: 80px;
    }
    .list {
      text-align: left;
      justify-content: space-between;
    }
    .item-wrap {
      padding: 0 50px 0 0;
      margin-bottom: 0;
      width: 33%;
      max-width: 100%;
    }
  }
</style>
