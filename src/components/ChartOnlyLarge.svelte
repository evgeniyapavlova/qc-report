<script>
  export let chartId,
    data,
    label = '',
    lineColor = '#e62334';
  import { onMount } from 'svelte';
  import Chart from 'chart.js';

  onMount(() => {
    const intViewportWidth = window.innerWidth;
    if (intViewportWidth < 670) {
      renderChart(13, 6, 6, 5);
    } else {
      renderChart();
    }
  });
  const renderChart = (
    fontSize = 13,
    maxYTicksLimit = 10,
    maxXTicksLimit = 11,
    pointRadius = 5
  ) => {
    const ctx = document.getElementById(chartId).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            backgroundColor: 'transparent',
            borderColor: lineColor,
            data: data.values,
            lineTension: 0,
            pointBackgroundColor: '#fff',
            pointBorderColor: lineColor,
            pointRadius,
            pointBorderWidth: 2,
            borderWidth: 1,
            offsetGridLines: false,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 40,
          },
        },
        scales: {
          xAxes: [
            {
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
                stepSize: 25,
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
              fontSize,
              '500',
              Chart.defaults.global.defaultFontFamily
            );
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function (bar, index) {
                var data = dataset.data[index];
                ctx.fillStyle = lineColor;
                if (data !== 0) {
                  ctx.fillText(data, bar._model.x, bar._model.y - 10);
                }
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
