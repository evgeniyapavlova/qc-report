<script>
  export let lang;
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Col2 from '../../Col2.svelte';
  import Layout from '../../Layout.svelte';
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
            'Департамент Customer Care насчитывает 179&nbsp;человек. И&nbsp;более&nbsp;75% нашей команды&nbsp;&mdash; удаленные сотрудники. Чтобы собрать многонациональную команду в&nbsp;18&nbsp;странах мира и&nbsp;разных часовых поясах, мы&nbsp;посмотрели 3041&nbsp;видеоинтервью, прочли 1884&nbsp;эссе, провели больше 400 тестовых дней и&nbsp;обработали 52&nbsp;новых иностранных сайта по&nbsp;поиску работы.',
        },
        {
          title: 'Возможности роста',
          text:
            'Карьерный рост саппортера может быть очень разным, внутри отдела можно возглавить команду, углубиться в&nbsp;обучение сотрудников, заняться работой с&nbsp;отзывами на&nbsp;внешних ресурсах, оптимизировать расписание ребят, а&nbsp;снаружи&nbsp;&mdash; можно развиваться в&nbsp;любом отделе и&nbsp;любой команде, если успешно пройти внутренний конкурс. В&nbsp;2020 году 14&nbsp;человек перешли из&nbsp;отдела поддержки в&nbsp;другие отделы, а&nbsp;20&nbsp;&mdash; получили внутренний перевод внутри команды.',
          list: [
            {
              icon: changeIcon,
              title: '14',
              text: 'переходов в другие отделы',
            },
            { icon: change2Icon, title: '20', text: 'переводов внутри команды' },
          ],
        },
      ],
    },
    en: {
      quote: 'The 100th remote employee joined our&nbsp;team in November&nbsp;2020.',
      caption: 'Geography of remote employees',
      items: [
        {
          title: 'Our team',
          text: 'There are 179 people in&nbsp;our Customer Care department. And more than&nbsp;75% of&nbsp;our team are remote workers. To&nbsp;assemble a&nbsp;multinational team in&nbsp;18&nbsp;countries and different time zones, we&nbsp;watched 3,041 video interviews, read 1,884&nbsp;essays, conducted over 400 test days and developed 52&nbsp;new foreign job search websites.',
        },
        {
          title: 'Opportunities for growth',
          text: 'A&nbsp;support staffer&rsquo;s career growth can vary greatly&nbsp;&mdash; inside the department they could lead a&nbsp;team, go&nbsp;deeper into training of&nbsp;employees, work with feedback on&nbsp;external resources, optimize the schedule of&nbsp;colleagues. Outside, they can develop in&nbsp;any department and any team, if&nbsp;they successfully pass the internal competition. In&nbsp;2020, 14&nbsp;people moved from the support department to&nbsp;other departments and 20&nbsp;were transferred internally within the team.',
          list: [
            { icon: '', title: '14', text: 'transfers to other departments' },
            { icon: '', title: '20', text: 'internal<br />transfers' },
          ],
        },
      ],
    },
  };
</script>

<section>
  <Layout>
    <Col2>
      <div slot="right">
        {#each content[lang].items as item}
          <h5>{item.title}</h5>
          <p>{@html item.text}</p>
          {#if item.list}
            <div class="list">
              {#each item.list as iconItem}
                <div class="list-item">
                  <Icon_Number_Text {...iconItem} />
                </div>
              {/each}
            </div>
          {/if}
        {/each}
      </div>
      <div slot="left" class="flex-reverse">
        <div class="quote">{@html content[lang].quote}</div>
        <img
          src="ASSET_PREFIX/assets/mau/pie-chart.jpg"
          alt=""
          class="chart-img"
        />
      </div>
    </Col2>
    <div class="chart-label">{content[lang].caption}</div>
    <div class="map"></div>
    <Countries />
  </Layout>
</section>

<style>
  p {
    margin-bottom: 70px;
  }
  section {
    padding-top: 100px;
  }
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
  .map {
    background: url('ASSET_PREFIX/assets/mau/map_mobile.jpg') no-repeat center
      center;
    background-size: 100% auto;
    padding-bottom: 51%;
    width: 100%;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: 750px) {
    .map {
      background-image: url('ASSET_PREFIX/assets/mau/map.jpg');
      padding-bottom: 55%;
    }
  }
  @media only screen and (min-width: 960px) {
    .chart-label {
			margin-top: 60px;
    }
    .flex-reverse {
      flex-direction: column-reverse;
      display: flex;
    }
    .chart-img {
      margin-bottom: 70px;
			margin-top: 0;
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
