<script>
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import bannerIcon from '../img/banner.svg';
  import designIcon from '../img/design.svg';
  import videoIcon from '../img/video.svg';
  import Layout from '../../Layout.svelte';
  export let lang;
  const content = {
    ru: {
      title: 'Video and Web Design',
      text:
        'Мы сделали более 5000 баннеров на 15 языках. Разработали более 20 сайтов и лендингов для компаний всего холдинга — постоянно следим за качеством и стремимся улучшать конверсию.<br><br>Более 350 писем было отрисовано за этот год на различные тематики. Обновили около 25 роликов в видеоразделе обучения IQ Option на всех языках платформы.<br><br>В маркетинге вышло более 3700 новых видео, большинство из которых и привело нам большую часть наших трейдеров.',
      site: 'Сайт новой партнерской программы',
      land: 'Наш лучший лендинг',
      items: ['Баннеров', 'Видео', 'Дизайнов рассылок'],
    },
    en: {
      title: 'Video and Web Design',
      text:
        'We&rsquo;ve made over 5000 banners in&nbsp;15&nbsp;languages. We&rsquo;ve developed more than 20&nbsp;websites and webpages for companies throughout the holding company. We&rsquo;re constantly monitoring quality and striving to&nbsp;improve conversion rates.<br /><br />More than 350 letters have been depicted this year on&nbsp;a&nbsp;variety of&nbsp;subjects. We&rsquo;ve updated about 25&nbsp;videos in&nbsp;the IQ&nbsp;Option training video section in&nbsp;all languages of&nbsp;the platform.<br /><br />More than 3,700 new videos were released in&nbsp;marketing, most of&nbsp;which brought&nbsp;us a&nbsp;large proportion of&nbsp;our traders.',
      site: 'Website of the new affiliate programme',
      land: 'Our best landing',
      items: ['Banners', 'Videos', 'Letters'],
    },
  };

  const iconNumber = [
    { icon: bannerIcon, number: 5000 },
    { icon: videoIcon, number: 3700 },
    { icon: designIcon, number: 350 },
  ];
</script>

<section>
  <Layout>
    <div class="wrap">
      <div class="title-content">
        <h5>{content[lang].title}</h5>
        <p>
          {@html content[lang].text}
        </p>
      </div>
      <div class="aff-content">
        <img
          src="ASSET_PREFIX/assets/mau/new_aff_prog.png"
          alt="content[lang].site}"
          class="new-aff-pro"
        />
        <a
          href="https://affiliate.iqbroker.com/affiliate_offers/"
          target="_blank"
          class="red-link"
        >{content[lang].site}</a>
      </div>
      <div class="land-content">
        <img
          src="ASSET_PREFIX/assets/mau/best_landing.png"
          alt="Наш лучший лендинг"
          class="best-land"
        />
        <a
          href="https://iqbroker.co/lp/mobile/"
          target="_blank"
          class="red-link"
        >{content[lang].land}</a>
      </div>
      <div class="list">
        {#each iconNumber as item, index}
          <div class="item">
            <Icon_Number_Text
              icon="{item.icon}"
              title="{item.number}"
              text="{content[lang].items[index]}"
            />
          </div>
        {/each}
      </div>
    </div>
  </Layout>
</section>

<style>
  .red-link {
    text-align: center;
  }
  .list {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 60px;
  }
  h5 {
    margin-bottom: 19px;
  }
  .item {
    width: 50%;
    margin-bottom: 60px;
  }
  .new-aff-pro {
    width: 100%;
    max-width: 666px;
    display: block;
    margin: 80px auto 24px;
  }

  .best-land {
    display: block;
    width: 100%;
    max-width: 528px;
    margin: 100px auto 0;
  }
  @media only screen and (min-width: 960px) {
    .wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
    }
    .title-content {
      width: 345px;
    }
    .aff-content {
      width: calc(100% - 400px);
    }
    .new-aff-pro {
      margin: 0;
    }
    .aff-content .red-link {
      text-align: right;
			padding-right: 4%;
    }
    .land-content .red-link {
      text-align: left;
      position: absolute;
      left: 0;
      top: 65%;
    }
    .land-content {
      width: calc(100% - 480px);
      position: relative;
    }
    .item {
      width: 33%;
      text-align: left;
    }
    .list {
      width: 480px;
      align-self: center;
    }
  }
</style>
