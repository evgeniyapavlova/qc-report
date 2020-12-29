<script>
  export let lang = 'ru';
  import icon1 from '../img/hand_spray.svg';
  import icon2 from '../img/sanitiser.svg';
  import icon3 from '../img/surface.svg';
  import icon4 from '../img/bags.svg';
  import icon5 from '../img/mask.svg';
  import icon6 from '../img/overall.svg';
  import icon7 from '../img/respirator.svg';
  import icon8 from '../img/inhaler.svg';
  import covid_test from '../img/covid_test.svg';
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
  const numbers2 = [
    '2 338',
    '210',
    '450',
    '220 000',
    '72 000',
    '2 550',
    '2 900',
    '28',
  ];

  import content, { tags } from '../content/corporate';
  const { hospitals } = content[lang];
  import H5_Red_P from '../../common/titles/H5_Red_P.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Tags from '../../Tags.svelte';
  import Col2_3 from '../../Col2_3.svelte';
  const numbers = ['₽ 9 045 824', 8];
</script>

<div class="wrap">
  <Col2_3>
    <div slot="right">
      <H5_Red_P h5="{hospitals.title}" p="{hospitals.p}" />
    </div>
    <div slot="left">
      <div class="list">
        <div class="item-wrap">
          <Icon_Number_Text title="{numbers[0]}" text="{hospitals.items[0]}" />
        </div>
        <div class="item-wrap-map">
          <div class="item-wrap ">
            <div class="img-wrap"></div>
            <div class="rel">
              <Icon_Number_Text
                title="{numbers[1]}"
                text="{hospitals.items[1]}"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="list2">
        {#each hospitals.list as item}
          <p class="red">{item}</p>
        {/each}
      </div>
    </div>
  </Col2_3>
  <Col2_3>
    <div slot="right">
      <h5>{content[lang].bought.title}</h5>
      <div class="list3">
        {#each content[lang].bought.items as item, index}
          <div class="item-wrap3">
            <Icon_Number_Text
              text="{item}"
              title="{numbers2[index]}"
              icon="{icons[index]}"
            />
          </div>
        {/each}
      </div>
    </div>
    <div slot="left">
      <div class="covid">
        <div class="item-wrap3">
          <Icon_Number_Text
            text="{content[lang].bought.covid}"
            title="1 000"
            icon="{covid_test}"
          />
        </div>
        <p class="p2">{content[lang].bought.text}</p>
      </div>
    </div>
  </Col2_3>
  <Tags tags="{tags}" />
</div>

<style>
  .p2 {
    margin-bottom: 120px;
  }
  .wrap {
    margin-top: 135px;
    margin-bottom: 120px;
  }
  .list2,
  .rel {
    position: relative;
  }
  .list {
    margin-top: 70px;
    margin-bottom: 245px;
  }
  .item-wrap {
    margin-bottom: 45px;
    max-width: 250px;
  }
  p.red {
    color: var(--red);
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 16px;
  }
  .item-wrap-map {
    position: relative;
    width: 100%;
  }
  .img-wrap {
    background-size: auto 300px;
    position: absolute;
    width: 100vw;
    left: -16px;
    top: -10px;
    height: 320px;
    background: url(ASSET_PREFIX/assets/responsibility/map_small.jpg) no-repeat
      center center;
    background-size: auto 320px;
  }
  .list3 {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin-top: 58px;
  }
  .item-wrap3 {
    margin-bottom: 65px;
    width: 50%;
    padding: 0 10px;
  }
  .covid .item-wrap3 {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  @media only screen and (min-width: 360px) {
    .item-wrap3 {
      width: 170px;
    }
  }
  @media only screen and (min-width: 600px) {
    .img-wrap {
      width: 100%;
      left: -24px;
      height: auto;
      padding-bottom: 51%;
      background-size: cover;
    }
    .list {
      margin-bottom: 45%;
    }
  }
  @media only screen and (min-width: 960px) {
    .p2 {
      margin-bottom: 0;
    }
    .wrap {
      margin-bottom: 150px;
    }
    .list {
      margin-top: 0;
      margin-bottom: 0;
    }
    .item-wrap {
      margin-bottom: 95px;
    }
    .img-wrap {
      left: auto;
      right: -24px;
      width: 100vw;
      padding-bottom: 51vw;
      background-image: url(ASSET_PREFIX/assets/responsibility/map_large.jpg);
    }
    .item-wrap3 {
      margin-bottom: 85px;
      width: 33%;
    }
    .list3 {
      text-align: left;
      justify-content: flex-start;
    }

    .covid .item-wrap3 {
      margin-left: 0;
      margin-right: auto;
      text-align: left;
      margin-top: 82px;
      width: auto;
      margin-bottom: 127px;
    }
    .item-wrap3 {
      padding: 0 10px 0 0;
    }
  }
  @media only screen and (min-width: 1150px) {
    .img-wrap {
      width: 1075px;
      right: 0;
      height: 550px;
      padding-bottom: 0;
    }
    .item-wrap3 {
      width: 25%;
    }
    .covid .item-wrap3 {
      width: auto;
    }
  }
</style>
