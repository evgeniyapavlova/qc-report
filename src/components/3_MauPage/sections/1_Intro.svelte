<script>
  import people from '../../../helpers/people';
  import Layout from '../../Layout.svelte';
  import Chart from '../../Chart.svelte';
  import H1_Text_Avatar from '../../H1_Text_Avatar.svelte';
  import Col2 from '../../Col2.svelte';

  import { mauChart, ftdChart } from './chartData';
  import Aside1 from '../components/Aside1.svelte';
  export let lang;
  const { tychenko } = people;

  const content = {
    ru: {
      h1: 'Эпик по MAU выполнен',
      text:
        'В начале года перед нам стояла цель — Увеличить базу активных клиентов. Чтобы достигнуть ее, компания работала в нескольких направлениях: развитие продукта, маркетинговые решения, поддержка клиентов, продвижение платформы в регионах. ',
    },
  };
</script>

<section>
  <Layout>
    <H1_Text_Avatar
      h1="{content[lang].h1}"
      person="{tychenko}"
      text="{content[lang].text}"
    />
    <Col2>
      <div slot="right" class="content-right">
        <div class="chart-wrap">
          <Chart chartId="mau1-chart" data="{mauChart}" label="MAU" />
        </div>
        <div class="chart-wrap-2">
          <Chart
            chartId="ftd-chart"
            data="{ftdChart}"
            label="FTD"
            lineColor="#323E48"
          />
        </div>
      </div>
      <div slot="left">
        <Aside1 lang="{lang}" />
      </div>
    </Col2>
  </Layout>
</section>

<style>
  section {
    padding-top: 65px;
  }
  .content-right {
    margin-top: 48px;
  }
  .chart-wrap-2 {
    margin-top: 62px;
  }
  @media only screen and (min-width: 960px) {
    section {
      padding-top: 76px;
    }
  }
</style>
