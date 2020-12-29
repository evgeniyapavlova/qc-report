<script>
  export let lang;
  import Aside from '../components/Aside.svelte';
  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import people from '../../../helpers/people';
  import Chart from '../../Chart.svelte';
  const { francois } = people;
  const data = {
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
    values: [0, 0, 8000, 4000, 9500, 1500, 0, 0, 0, 0, 0, 0],
  };

  const content = {
    ru: {
      h2: 'Верификация новых пользователей в эпоху COVID',
      text:
        'Быстрая верификация — это важная часть удовлетворенности пользователей и их активности на платформе. Нам удалось сохранить высокую скорость верификации несмотря на челленджи эпохи COVID.',
      happened: 'Что произошло?',
      p:
        'В&nbsp;марте 2020 года Jumio&nbsp;&mdash; наш основной поставщик автоматизированной проверки документов KYC (Know Your Customer)&nbsp;&mdash; сильно пострадал от&nbsp;кризиса COVID и&nbsp;закрыл часть своих офисов. Они не&nbsp;смогли оказывать нам услуги с&nbsp;необходимой скоростью, это означало, что нам приходилось проверять документы вручную. К&nbsp;концу марта количество документов KYC, ожидающих проверки, взлетело до&nbsp;8&nbsp;000, к&nbsp;апрелю мы&nbsp;смогли сократить его до&nbsp;4&nbsp;000, а&nbsp;в&nbsp;мае количество документов вновь поднялось до&nbsp;9500, потому что первая волна пандемии принесла нам очень много клиентов.',
      label: 'Количество пользователей, ожидающих верификации',
      h4: 'Как мы это решили?',
      p2:
        'Благодаря команде Back Office к июню мы снизили количество документов до 1500, а в ноябре количество клиентов, ожидающих верификации более 3 дней, стремится к нулю. Мы полностью решили ситуацию с Jumio и работаем над добавлением второго поставщика услуг.',
    },
    en: {
      h2: 'Verification of new users in the era COVID',
      text:
        'Fast user verification is an important part of user satisfaction and their activity on the platform. We managed to maintain a high speed of verification despite the challenges of the COVID era.',
      happened: 'What happened?',
      p:
        'In&nbsp;March 2020, Jumio, our main provider of&nbsp;automated document verification KYC (Know Your Customer), was hit hard by&nbsp;the COVID crisis and closed some of&nbsp;its offices. They weren&rsquo;t able to&nbsp;provide&nbsp;us with services at&nbsp;the required speed, which meant that we&nbsp;had to&nbsp;verify documents manually. By&nbsp;the end of&nbsp;March, the number of&nbsp;KYC documents awaiting verification soared to&nbsp;8,000; by&nbsp;April we&nbsp;were able to&nbsp;reduce it&nbsp;to&nbsp;4,000, and in&nbsp;May the number of&nbsp;documents rose again to&nbsp;9,500, because the first wave of&nbsp;the pandemic brought&nbsp;us a&nbsp;lot of&nbsp;customers.',
      label: 'Number of clients waiting for verification',
      h4: 'How did we resolve this?',
      p2:
        'Thanks to&nbsp;our Back Office team, by&nbsp;June we&nbsp;had reduced the number of&nbsp;documents to&nbsp;1500, and in&nbsp;November the number of&nbsp;clients waiting for verification for more than 3&nbsp;days approached zero. We&rsquo;ve completely resolved the situation with Jumio and are working on&nbsp;adding a&nbsp;second service provider.',
    },
  };
</script>

<section>
  <Layout>
    <div class="h2-wrap">
      <H2_Text_Avatar
        h2="{content[lang].h2}"
        person="{francois}"
        text="{content[lang].text}"
      />
    </div>
    <div class="flex">
      <div class="content">
        <h4 class="h4-title">{content[lang].happened}</h4>
        <p>
          {@html content[lang].p}
        </p>
        <div class="chart-label">
          {@html content[lang].label}
        </div>
        <div class="chart-wrap">
          <Chart chartId="ver-chart" data="{data}" />
        </div>
        <h4 class="h4-title">{content[lang].h4}</h4>
        <p>
          {@html content[lang].p2}
        </p>
      </div>
      <Aside lang="{lang}" />
    </div>
  </Layout>
</section>

<style>
  section {
    padding: 100px 0 30px;
  }
  .h2-wrap {
    margin-bottom: 50px;
  }
  h4 {
    margin-bottom: 15px;
  }
  .chart-label {
    margin-top: 50px;
  }
  .chart-wrap {
    margin-bottom: 50px;
    height: 350px;
    position: relative;
  }
  .content {
    width: 100%;
    margin-bottom: 80px;
  }
  @media only screen and (min-width: 960px) {
    .flex {
      display: flex;
      justify-content: space-between;
    }
    .content {
      width: 58%;
      margin-bottom: 0;
    }
  }
</style>
