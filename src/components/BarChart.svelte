<script>
  export let chartId,
    data;
  import { onMount } from 'svelte';
  import Chart from 'chart.js';

  onMount(() => {
    renderChart();
  });
  const renderChart = (
    fontSize = 13,
    maxYTicksLimit = 10,
    maxXTicksLimit = 11,
  ) => {
    const ctx = document.getElementById(chartId).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: '2019',
            backgroundColor: '#D6D8DA',
            data: data.values.values1,
          },
          {
            label: '2020',
            backgroundColor: '#E62334',
            data: data.values.values2,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20,
          },
        },
        scales: {
          xAxes: [
            {
              stacked: false,
              type: 'category',
              offset: true,
              gridLines: {
                drawOnChartArea: true,
                zeroLineWidth: 0,
                drawTicks: false,
                drawBorder: false,
                display: false,
              },
              ticks: {
                fontSize,
                padding: 10,
                fontColor: '#3E4953',
                maxRotation: 45,
                minRotation: 45,
                maxTicksLimit: maxXTicksLimit,
              },
            },
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                display: true,
                drawTicks: false,
                drawBorder: false,
                offsetGridLines: false,
              },
              ticks: {
                fontSize,
                padding: 10,
                maxTicksLimit: maxYTicksLimit,
                fontColor: '#D8D8D8',
                // stepSize: 10,
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            boxWidth: 12,
          },
        },
        tooltips: {
          // enabled: false,
        },
        hover: {
          animationDuration: 0,
        },
      },
    });
  };
  Chart.defaults.global.defaultFontFamily = 'Montserrat';
</script>

<canvas id="{chartId}"></canvas>
