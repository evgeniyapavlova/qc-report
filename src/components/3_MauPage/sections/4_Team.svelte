<script>
  export let lang;
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Col2 from '../../Col2.svelte';
  import Layout from '../../Layout.svelte';
  import speedIcon from '../img/speed.svg';
  import smileIcon from '../img/smile.svg';
  import langIcon from '../img/lang.svg';
  import changeIcon from '../img/change.svg';
  import change2Icon from '../img/change2.svg';
  import Countries from '../components/Countries.svelte';
  const content = {
    ru: {
      quote:
        '100-ый удаленный сотрудник присоединился к нашей команде в ноябре 2020 года',
      caption: 'География удалённых сотрудников',
      items: [
        {
          title: 'Наша команда',
          text:
            'Департамент Customer Care насчитывает 179 человек. И более 75% нашей команды — удаленные сотрудники. Чтобы собрать многонациональную команду в 18 странах мира и разных часовых поясах мы посмотрели 3041 видеоинтервью, прочли 1884 эссе, провели больше 400 тестовых дней и обработали 52 новых иностранных сайта по поиску работы.',
          list: [
            {
              icon: speedIcon,
              title: '1 мин',
              text: 'скорость обработки обращения',
            },
            { icon: smileIcon, title: '7,89', text: 'средний NPS' },
            { icon: langIcon, title: '13', text: 'языков' },
          ],
        },
        {
          title: 'Возможности роста',
          text:
            'Карьерный рост саппортера может быть очень разным, внутри отдела можно возглавить команду, углубиться в обучение сотрудников, заняться работой с отзывами на внешних ресурсах, оптимизировать расписание ребят, а снаружи — можно развиваться в любом отделе и любой команде, если успешно пройти внутренний конкурс. В 2020 году 13 человек перешли из отдела поддержки в другие отделы, а 19 — получили внутренний перевод внутри команды',
          list: [
            {
              icon: changeIcon,
              title: '13',
              text: 'переходов в другие отделы',
            },
            { icon: change2Icon, title: '19', text: 'перевод внутри команды' },
          ],
        },
      ],
    },
    en: {
      quote: '',
      caption: '',
      items: [
        {
          title: '',
          text: '',
          list: [
            { icon: '', title: '', text: '' },
            { icon: '', title: '7,89', text: '' },
            { icon: '', title: '13', text: '' },
          ],
        },
        {
          title: '',
          text: '',
          list: [
            { icon: '', title: '13', text: '' },
            { icon: '', title: '19', text: '' },
          ],
        },
      ],
    },
  };
</script>

<Layout>
  <Col2>
    <div slot="right">
      {#each content[lang].items as item}
        <h5>{item.title}</h5>
        <p>{item.text}</p>
        <div class="list">
          {#each item.list as iconItem}
            <div class="list-item">
              <Icon_Number_Text {...iconItem} />
            </div>
          {/each}
        </div>
      {/each}
    </div>
    <div slot="left" class="flex-reverse">
      <div class="quote">{content[lang].quote}</div>
      <img src="/assets/mau/pie-chart.jpg" alt="" class="chart-img" />
    </div>
  </Col2>
  <div class="caption">{content[lang].caption}</div>
  <div class="map"></div>
  <Countries />
</Layout>

<style>
  .chart-img {
    width: 100%;
    max-width: 437px;
    margin: 55px auto 84px;
    display: block;
  }
  h5 {
    margin-bottom: 19px;
  }
  .list {
    display: flex;
    text-align: center;
    margin-top: 65px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .list-item {
    width: 50%;
    margin-bottom: 60px;
    max-width: 160px;
  }
  .quote {
    max-width: 347px;
    margin: 40px auto 0;
  }
  .caption {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    opacity: 0.5;
    margin-bottom: 35px;
  }
  .map {
    background: url('/assets/mau/map_mobile.jpg') no-repeat center center;
    background-size: 100% auto;
    padding-bottom: 51%;
    width: 100%;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: 750px) {
    .map {
      background-image: url('/assets/mau/map.jpg');
      padding-bottom: 55%;
    }
  }
  @media only screen and (min-width: 960px) {
    .flex-reverse {
      flex-direction: column-reverse;
      display: flex;
    }
    .chart-img {
      margin-bottom: 70px;
    }
    .list {
      text-align: left;
      margin-top: 50px;
      justify-content: flex-start;
    }
    .quote {
      margin-top: 0;
    }
    p {
      max-width: 528px;
    }
  }
  @media only screen and (min-width: 1070px) {
    .chart-img {
      width: 140%;
      margin-left: -40%;
    }
  }
</style>
