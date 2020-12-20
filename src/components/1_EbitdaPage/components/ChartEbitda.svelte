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
      renderChart(9, 6, 6, 2);
    } else {
      renderChart();
    }
  });
  const renderChart = (
    fontSize = 13,
    maxYTicksLimit = 10,
    maxXTicksLimit = 11,
    pointRadius = 5,
  ) => {
    const ctx = document.getElementById(chartId).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      plugins: [
        {
          afterDraw: (chart) => {
            const ctx = chart.chart.ctx;
            ctx.save();
            ctx.font = `400 14px "Proxima Nova"`;
            ctx.fillStyle = 'rgba(50,62,72,0.5)';
            const y = 15;
            ctx.textAlign = 'left';
            ctx.fillText(label, 5, y);
            ctx.textAlign = 'right';
            ctx.fillText('forecast', chart.width, y);
            ctx.fillStyle = '#E62334';
            ctx.fillText('*', chart.width - 52, y);
            ctx.restore();
          },
        },
      ],
      data: {
        labels: data.labels,
        datasets: [
          {
            // backgroundColor: 'rgba(230,35,52,0.1)',
            backgroundColor: 'transparent',
            // pointHoverBackgroundColor: '#F2DCDE',
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
                fontColor: 'rgba(50,62,72,1)',
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
                callback: function (value, index, values) {
                  return value + 'M';
                },
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
                if (index === dataset.data.length - 1) {
                  data = data + '*';
                }
                ctx.fillStyle = lineColor;
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
