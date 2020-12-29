<script>
  export let lang;
  import icon1 from '../img/burnout.svg';
  import icon2 from '../img/self_development.svg';
  import icon3 from '../img/involvment.svg';
  import icon4 from '../img/together.svg';
  import icon5 from '../img/marketing.svg';

  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import H5_p from '../../H5_p.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Col2 from '../../Col2.svelte';
  const romashkina = {
    name: 'Natalia Romashkina',
    position: 'Head of Corporate Culture',
    photo: 'romashkina',
  };
  import content from '../content/corporate';
  const icons = [icon1, icon2, icon3, icon4, icon5];
</script>

<section>
  <Layout>
    <H2_Text_Avatar
      h2="{content[lang].h2}"
      text="{content[lang].h4}"
      person="{romashkina}"
    />
    <Col2>
      <div slot="right">
        <p class="p1">
          {@html content[lang].p1}
        </p>
        <H5_p red="{true}" h5="{content[lang].h5}" p="{content[lang].p2}" />
        <h5>{content[lang].h5_2}</h5>
        <div class="list">
          {#each content[lang].items as item, index}
            <div class="item-wrap">
              <Icon_Number_Text icon="{icons[index]}" text="{item}" />
            </div>
          {/each}
        </div>
      </div>
      <div slot="left">
        <div class="quote">
          {@html content[lang].quote}
        </div>
        <img src="ASSET_PREFIX/assets/management/phone.jpg" alt="" />
      </div>
    </Col2>
  </Layout>
</section>

<style>
  section {
    padding-top: 140px;
    overflow: hidden;
  }
  .p1 {
    margin: 80px 0 75px;
  }
  h5 {
    margin: 125px 0 85px;
    text-align: center;
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
  .quote {
    margin-top: 70px;
    max-width: 350px;
    z-index: 1;
    position: relative;
  }
  img {
    width: 100%;
    max-width: 712px;
    margin: 60px auto 0;
    display: block;
    z-index: 0;
  }
  @media only screen and (min-width: 450px) {
    img {
      margin: 0 -100px 0 auto;
    }
  }
  @media only screen and (min-width: 650px) {
    img {
      margin-top: -50px;
    }
  }
  @media only screen and (min-width: 800px) {
    .item-wrap {
      width: 33%;
    }
  }
  @media only screen and (min-width: 800px) {
    img {
      margin-top: -200px;
    }
  }
  @media only screen and (min-width: 960px) {
    .p1 {
      margin: 55px 0 76px;
    }
    h5 {
      text-align: left;
      margin: 85px 0 56px;
    }
    .list {
      justify-content: flex-start;
      text-align: left;
    }
    .item-wrap {
      padding: 0 20px 0 0;
    }
    img {
      margin-top: 115px;
      width: 712px;
      margin-right: 0;
      margin-left: -130px;
    }
  }
</style>
