<script>
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
</script>

<section>
  <Layout>
    <div class="h2-wrap">
      <H2_Text_Avatar
        h2="Верификация новых пользователей <span>в эпоху COVID</span>"
        person="{francois}"
        text="Быстрая верификация — это важная часть удовлетворенности пользователей и их активности на платформе. Нам удалось сохранить высокую скорость верификации несмотря на челленджи эпохи COVID."
      />
    </div>
    <div class="flex">
      <div class="content">
        <h4 class="h4-title">Что произошло?</h4>
        <p>
          В марте 2020 года Jumio — наш основной поставщик автоматизированной
          проверки документов KYC (Know Your Customer) — сильно пострадал от
          кризиса COVID и закрыл часть своих офисов. Они не смогли оказывать нам
          услуги с необходимой скоростью, это означало, что нам приходилось
          проверять документы вручную. К концу марта количество документов KYC,
          ожидающих проверки, взлетело до 8 000, к апрелю мы смогли сократить
          его до 4000, а в мае количество документов вновь поднялось до 9500,
          потому что первая волна пандемии принесла нам очень много клиентов.
        </p>
        <div class="chart-label">
          Количество пользователей, ожидающих верификации
        </div>
        <div class="chart-wrap">
          <Chart chartId="ver-chart" data="{data}" />
        </div>
        <h4 class="h4-title">Как мы это решили?</h4>
        <p>
          Благодаря нашей команде Back Office к июню мы снизили количество
          документов до 1500, а в ноябре количество клиентов, ожидающих
          верификации более 3 дней, стремится к нулю. Мы полностью решили
          ситуацию с Jumio и работаем над добавлением второго поставщика услуг.
        </p>
      </div>
      <Aside />
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
    max-width: 620px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
</style>
