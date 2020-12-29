<script>
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
    ],
    values: {
      values1: [12, 8, 14, 9, 6, 9, 7, 12, 10, 8, 5],
      values2: [6, 4, 1, 4, 3, 4, 3, 6, 6, 0, 2],
    },
  };
  export const chartData2 = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    values: [0, 15.6, 31.7, 38.3, 48.3, 51.7, 55, 56.7],
  };
  import BarChart from '../../BarChart.svelte';
  import Chart from '../../ChartOnlyLarge.svelte';
  import Col2 from '../../Col2_5_6.svelte';
</script>

<Col2>
  <div slot="right">
    <div class="chart-label">
      Reducing the bus factor for N-1, N-2 in key positions, %
    </div>
    <div class="chart-wrap">
      <Chart
        label=""
        chartId="bus-factor-chart"
        data="{chartData2}"
        topPadding="{50}"
      />
    </div>
  </div>
  <div slot="left">
    <div class="wrap">
      <div class="chart-label">
        Staff turnover in the IT department, number of people
      </div>
      <div class="chart-wrap">
        <BarChart label="" chartId="bar-ch" data="{data}" />
      </div>
    </div>
  </div>
</Col2>

<style>
  .chart-wrap {
    position: relative;
    width: 100%;
    height: 290px;
  }
  .wrap {
    margin-top: 100px;
  }
  @media only screen and (min-width: 960px) {
    .wrap {
      margin-top: 0;
      padding-right: 16%;
    }
    .chart-label {
      margin-top: 80px;
    }
  }
</style>
