<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import PlanningList from '../components/PlanningList.svelte';
  import Release from '../components/Release.svelte';
  import Reviews from '../components/Reviews.svelte';
  import H1_Text_Avatar from '../../H1_Text_Avatar.svelte';
  import H5_p from '../../H5_p.svelte';
  import Tags from '../../Tags.svelte';
  import Col2 from '../../Col2_6_5.svelte';
  import icon1 from '../img/icon1.svg';
  import icon2 from '../img/icon2.svg';
  import icon3 from '../img/icon3.svg';
  import Engine from './Engine.svelte';

  const david = {
    name: 'George David',
    position: 'Product Owner Forex/CFD Products',
    photo: 'david',
  };
  const content = {
    ru: {
      h1: 'Запуск Margin&nbsp;Forex',
      text:
        'Одна из&nbsp;наших стратегических целей&nbsp;&mdash; Диверсификация прибыли по&nbsp;продукту. Главным новым продуктом, над которым мы&nbsp;работали в&nbsp;этом году, стал Margin Forex.',
      q: 'Что даст нам новый маржинальный движок?',
      list: ['Больше клиентов', 'Больше Lifetime', 'Больший Lifetime Value'],
      quote:
        'Мы уже лидируем на рынке опционов, и cледующим продуктом, в котором мы хотели развиваться, стал Forex. Это продукт с очень большим потенциалом.',
      plan: 'Планирование',
      planText:
        'При планировании релиза Margin Forex на пользователей мы обращали особое внимание на три аспекта:',
      release: 'состоялась первая итерация релиза Margin&nbsp;Forex',
    },
    en: {
      h1: 'Launch of Margin&nbsp;Forex',
      text:
        'One of&nbsp;our strategic goals is&nbsp;to&nbsp;diversify profits by&nbsp;product. The main new product we&nbsp;worked on&nbsp;this year was Margin Forex.',
      q: 'What will the new margin engine give&nbsp;us?',
      list: ['More clients', 'More Lifetime', 'Greater Lifetime Value'],
      quote:
        'We&rsquo;re already leading the options market and the next product we&nbsp;wanted to&nbsp;develop was Forex. This is&nbsp;a&nbsp;product with very great potential.',
      release: 'the first iteration of the Margin Forex release took place',
      plan: 'Planning',
      planText:
        'When planning the release of&nbsp;Margin Forex to&nbsp;users, we&nbsp;paid particular attention to&nbsp;three aspects:',
    },
  };

  const icons = [icon1, icon2, icon3];
  const tags = [
    'Software Development',
    'IT Operations',
    'Data & Analysis',
    'Quality Control',
    'IT Infrastructure Development',
    'System Architecture',
    'Dealing',
    'Antifraud',
    'Design',
    'Insights & Experiments',
    'System Analysis',
    'Affiliate',
    'Contextual Advertising',
    'Introducing Broker',
    'Acquisition Design',
    'Video Production,',
    'VIP & Sales',
    'Research Investment & Education',
    'Customer Support',
    'Support Tutors Team',
    'Brand Management',
    'Product Marketing / Retention',
    'Compliance',
    'Finance',
  ];
</script>

<span data-id="marginForex"></span>
<section>
  <Layout>
<!--    <H1_Text_Avatar-->
<!--      person="{david}"-->
<!--      h1="{content[lang].h1}"-->
<!--      text="{content[lang].text}"-->
<!--    />-->
<!--    <Col2>-->
<!--      <div slot="right" class="right">-->
<!--        <h5 class="h5-center">-->
<!--          {@html content[lang].q}-->
<!--        </h5>-->
<!--        <div class="list">-->
<!--          {#each content[lang].list as item, index}-->
<!--            <div class="list-item">-->
<!--              <svelte:component this="{icons[index]}" />-->
<!--              <div class="desc">{item}</div>-->
<!--            </div>-->
<!--          {/each}-->
<!--        </div>-->
<!--      </div>-->
<!--      <div slot="left" class="left">-->
<!--        <div class="quote">-->
<!--          {@html content[lang].quote}-->
<!--        </div>-->
<!--      </div>-->
<!--    </Col2>-->

<!--    <div class="h5-wrap">-->
<!--      <H5_p-->
<!--        red="{true}"-->
<!--        h5="{content[lang].plan}"-->
<!--        p="{content[lang].planText}"-->
<!--      />-->
<!--    </div>-->
<!--    <PlanningList lang="{lang}" />-->
    <Engine lang="{lang}" />

    <div class="release">
      <div class="text">
        <span>29.07.2020</span>
        <br />
        {@html content[lang].release}
      </div>
      <div class="mockup">
        <img src="ASSET_PREFIX/assets/margin_forex/margin_mockup.jpg" alt="" />
      </div>
    </div>
    <Release lang="{lang}" />
    <Reviews lang="{lang}" />
    <div class="tags-wrap">
      <Tags tags="{tags}" />
    </div>
  </Layout>
</section>

<style>
  .desc {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-top: 15px;
  }
  .quote {
    margin-bottom: 100px;
  }
  section {
    padding-top: 65px;
  }
  .h5-center {
    text-align: center;
    margin-top: 60px;
  }
  .list {
    margin-bottom: 60px;
    text-align: center;
  }
  .list-item {
    margin-top: 48px;
  }
  .release {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
    position: relative;
  }
  .release span {
    color: var(--red);
  }
  .mockup {
    margin: 37px 0 93px;
  }
  .mockup img {
    width: 100%;
    display: block;
  }
  .tags-wrap {
    margin-top: 100px;
  }
  .quote {
    max-width: 437px;
  }
  @media only screen and (min-width: 480px) {
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .list-item {
      width: 180px;
    }
  }
  @media only screen and (min-width: 660px) {
    .list {
      justify-content: flex-start;
    }
    .h5-center {
      text-align: left;
    }
    .list-item {
      text-align: left;
    }
    .mockup {
      margin-top: 10px;
    }
  }
  @media only screen and (min-width: 960px) {
    .h5-wrap {
      margin: 45px 0 90px;
      width: 58%;
    }
    section {
      padding-top: 76px;
    }
    .text {
      position: absolute;
      right: -121px;
      top: 47%;
      text-align: left;
      max-width: 150px;
    }
    .h5-center {
      margin-top: 0;
    }
    .list-item {
      margin-top: 80px;
      width: 33%;
    }
    .right,
    .left {
      margin-top: 115px;
    }
  }
</style>
