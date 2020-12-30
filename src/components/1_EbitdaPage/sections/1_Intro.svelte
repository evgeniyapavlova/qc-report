<script>
  export let lang;

  import icon1 from '../img/teamwork.svg';
  import icon2 from '../img/transform.svg';
  import icon3 from '../img/virus.svg';

  import Layout from '../../Layout.svelte';
  import H1_Text_Avatar from '../../H1_Text_Avatar.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Chart from '../components/ChartEbitda.svelte';
  import Col2 from '../../Col2_3.svelte';
  const rabinovich = {
    name: 'Anton Rabinovich',
    position: 'CEO',
    photo: 'rabinovich',
  };
  const content = {
    ru: {
      h1: 'Уверенно приближаемся к&nbsp;цели EBITDA',
      desc:
        'Финансовые результаты этого года отличные, несмотря на&nbsp;все вызовы, с&nbsp;которыми мы&nbsp;столкнулись.',
      quote:
        'Я&nbsp;вижу большой прогресс по&nbsp;целям, поставленным в&nbsp;начале года, и&nbsp;огромный потенциал для дальнейшего роста',
      p:
        'Как видно на&nbsp;графике, мы&nbsp;уверенно приближаемся к&nbsp;промежуточной цели EBITDA $250M, которую поставили в&nbsp;Mission Action Plan в&nbsp;2018&nbsp;году.',
      listTitle: 'Что этому способствовало?',
      list: [
        'Упорный труд всех веток и&nbsp;команд',
        'Организационная трансформация, которую мы&nbsp;проводим в&nbsp;последние 2&nbsp;года',
        'Пандемия коронавируса, которая за&nbsp;несколько месяцев перевернула весь мир',
      ],
    },
    en: {
      h1: "We're steadily approaching our EBITDA target",
      desc:
        "This year's financial results are excellent, despite all the challenges we've faced.",
      quote:
        'I see great progress on the goals set at the beginning of the year and great potential for further growth.',
      p:
        "As the chart shows, we're well on our way to the interim EBITDA target of $250M that we set in the Mission Action Plan in 2018.",
      listTitle: 'What made this possible?',
      list: [
        'Hard work by all branches and teams',
        "The organizational transformation we've been undergoing over the last two years",
        'The coronavirus pandemic, which turned the world upside down in a matter of months',
      ],
    },
  };

  const listIcons = [icon1, icon2, icon3];

  const chartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    values: [122, 128, 142, 146, 152, 168, 187, 206, 210, 215, 212, 204],
  };
</script>

<section>
  <Layout>
    <div class="h1-wrap">
      <H1_Text_Avatar
        person="{rabinovich}"
        h1="{content[lang].h1}"
        text="{content[lang].desc}"
      />
    </div>
    <Col2>
      <div slot="right" class="col col1">
        <div class="chart-wrap">
          <Chart
            data="{chartData}"
            chartId="ebitda-chart"
            label="EBITDA projection"
          />
        </div>
        <div class="quote">
          {@html content[lang].quote}
        </div>
      </div>
      <div slot="left" class="col col2">
        <p>
          {@html content[lang].p}
        </p>
        <h5>
          {@html content[lang].listTitle}
        </h5>
        <div class="list">
          {#each content[lang].list as item, index}
            <div class="item">
              <Icon_Number_Text icon="{listIcons[index]}" text="{item}" />
            </div>
          {/each}
        </div>
      </div>
    </Col2>
  </Layout>
</section>

<style>
  section {
    padding-top: 65px;
  }
  .chart-wrap {
    margin: 65px 0;
  }
  p {
    margin-bottom: 45px;
  }
  h5 {
    margin-bottom: 80px;
    text-align: center;
  }
  .list {
    text-align: center;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .item {
    margin-bottom: 45px;
    width: 190px;
  }
  .quote {
    margin-top: 65px;
    margin-bottom: 65px;
  }
  @media only screen and (min-width: 480px) {
    .item {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  @media only screen and (min-width: 960px) {
    .chart-wrap {
      margin: 0 0 65px;
    }

    .quote {
      margin-top: 80px;
      margin-bottom: 0;
    }
    section {
      padding-top: 76px;
    }
    .list,
    h5 {
      text-align: left;
    }
    h5 {
      margin-bottom: 40px;
    }
    .item {
      margin-left: 0;
      margin-right: auto;
    }
    p {
      margin-bottom: 60px;
    }
    .col {
      margin-top: 120px;
    }
  }
</style>
