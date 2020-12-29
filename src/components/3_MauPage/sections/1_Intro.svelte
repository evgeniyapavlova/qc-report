<script>
  import Layout from '../../Layout.svelte';
  import Chart from '../../Chart.svelte';
  import H1_Text_Avatar from '../../H1_Text_Avatar.svelte';
  import Col2 from '../../Col2.svelte';

  import { mauChart, ftdChart } from './chartData';
  import Aside1 from '../components/Aside1.svelte';
  export let lang;
  const tychenko = {
    name: 'Evgeny Tychenko',
    position: 'Chief of B2C',
    photo: 'tychenko',
  };

  const content = {
    ru: {
      h1: 'Эпик по MAU выполнен',
      text:
        'В начале года перед нам стояла цель — Увеличить базу активных клиентов. Чтобы достигнуть ее, компания работала в нескольких направлениях: развитие продукта, маркетинговые решения, поддержка клиентов, продвижение платформы в регионах. ',
    },
    en: {
      h1: 'Epic for MAU completed',
      text:
        'At the beginning of the year we had a goal—Increase active client base. To achieve this, the company has worked in several areas: product development, marketing solutions, customer support, and promotion of the platform in the regions.',
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
        <div class="chart-wrap-2 chart-wrap">
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
  .chart-wrap {
    height: 300px;
    position: relative;
    width: 100%;
  }
  @media only screen and (min-width: 960px) {
    section {
      padding-top: 76px;
    }
  }
</style>
