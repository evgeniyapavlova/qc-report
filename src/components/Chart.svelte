<script>
  export let chartId, data;
  import { onMount } from 'svelte';
  import Chart from 'chart.js';

  onMount(() => {
    renderChart();
  });

  const renderChart = () => {
    const ctx = document.getElementById(chartId).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            backgroundColor: 'rgba(230,35,52,0.1)',
            pointHoverBackgroundColor: '#F2DCDE',
            borderColor: '#e62334',
            data: data.values,
            lineTension: 0,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#e62334',
            pointRadius: 5,
            pointBorderWidth: 2,
            borderWidth: 2,
            offsetGridLines: false,
            pointHoverRadius: 6,
          },
        ],
      },

      options: {
        scales: {
          xAxes: [
            {
              type: 'category',
              gridLines: {
                drawOnChartArea: true,
                zeroLineWidth: 0,
                drawTicks: false,
                drawBorder: false,
                borderDash: [4, 4],
              },
              ticks: {
                padding: 10,
                fontColor: '#3E4953',
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                drawTicks: false,
                drawBorder: false,
              },
              ticks: {
                padding: 10,
                fontColor: '#D8D8D8',
                stepSize: 2500,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        hover: {
          animationDuration: 0,
        },
        animation: {
          duration: 1000,
          onComplete: function () {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontSize,
              '600',
              Chart.defaults.global.defaultFontFamily
            );
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                var data = dataset.data[index];
                ctx.fillStyle = '#e62334';
                if (data !== 0)
                  ctx.fillText(data, bar._model.x, bar._model.y - 10);
              });
            });
          },
        },
      },
    });
  };
  Chart.defaults.global.defaultFontFamily = 'Montserrat';
</script>

<canvas id="{chartId}"></canvas>
