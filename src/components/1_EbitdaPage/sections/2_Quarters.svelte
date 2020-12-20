<script>
  export let lang;

  import { content, charts, numbers, icons } from '../content/quarters';

  import Layout from '../../Layout.svelte';
  import Chart from '../../ChartOnlyLarge.svelte';
  import LineNumberItem from '../../LineNumberItem.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Avatar from '../../Avatar.svelte';
  import people from '../../../helpers/people';
  const { gitsis } = people;
</script>

<section>
  <Layout>
    {#each content[lang].list as item, index}
      {#if index === 0}
        <div class="item">
          <div class="row row-reverse">
            <div class="col col-chart">
              <div class="avatar-wrap">
                <Avatar {...gitsis} />
              </div>
            </div>
            <div class="col col-text">
              <h5>{item.title}</h5>
              <p>
                {@html item.text}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col col-chart">
              <div class="chart-wrap">
                <Chart
                  data="{charts[index]}"
                  chartId="{`q-${index - 1}-chart`}"
                />
              </div>
            </div>
            <div class="col col-text items-q1">
              <div class="quote">{item.quote}</div>
              <div class="items">
                <div class="number">
                  <LineNumberItem {...numbers[index]} />
                </div>
                <div class="icon-items">
                  {#each item.list as listItem, index1}
                    <div class="icon-item">
                      <Icon_Number_Text
                        text="{listItem}"
                        icon="{icons[index][index1]}"
                      />
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div class="item">
          <div class="row {item.isReverse ? 'row-reverse' : 'row-direct'}">
            <div class="col col-text">
              <h5>{item.title}</h5>
              <p>
                {@html item.text}
              </p>
            </div>
            <div class="col col-chart">
              <div class="chart-wrap">
                <Chart
                  data="{charts[index]}"
                  chartId="{`q-${index - 1}-chart`}"
                />
              </div>
            </div>
          </div>
          <div class="row {item.isReverse ? 'row-reverse' : 'row-direct'}">
            <div class="col col-text">
              <div class="quote">{item.quote}</div>
            </div>
            <div class="col col-chart">
              <div class="items">
                <div class="number">
                  <LineNumberItem {...numbers[index]} />
                </div>
                <div class="icon-items">
                  {#each item.list as listItem, index1}
                    <div class="icon-item">
                      <Icon_Number_Text
                        text="{listItem}"
                        icon="{icons[index][index1]}"
                      />
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </Layout>
</section>

<style>
  .item {
    margin-bottom: 70px;
  }
  h5 {
    color: var(--red);
    margin-bottom: 19px;
  }
  .chart-wrap {
    margin: 20px 0 40px;
    position: relative;
    width: 100%;
    height: 270px;
  }
  .quote {
    margin-bottom: 50px;
    max-width: 440px;
  }
  .icon-item {
    margin-bottom: 50px;
    max-width: 160px;
  }
  .items {
    display: flex;
    justify-content: space-between;
  }
  .number,
  .icon-items {
    width: 48%;
  }
  .avatar-wrap {
    margin-bottom: 55px;
  }
  @media only screen and (min-width: 800px) {
    .row {
      display: flex;
      justify-content: space-between;
    }
    .avatar-wrap {
      margin-bottom: 0;
    }
    .row-reverse {
      flex-direction: row-reverse;
    }
    .col {
      width: 47%;
    }
    .quote {
      margin: 0;
    }
    .chart-wrap {
      margin: 0;
    }
    p {
      margin-bottom: 50px;
    }
    .items-q1 .icon-items .icon-item {
      width: 47%;
    }
    .items-q1 .icon-items {
      width: 63%;
      display: flex;
      justify-content: space-between;
    }
    .items-q1 .number {
      width: 30%;
    }
    .items-q1 .quote {
      max-width: 620px;
			margin-bottom: 50px;
    }
  }
  @media only screen and (min-width: 960px) {
    .col-text {
      width: 57%;
    }
    .col-chart {
      width: 32%;
    }
    .items-q1 .icon-items .icon-item {
      width: 40%;
    }
    .items-q1 .icon-items {
      width: 55%;
    }
  }
</style>
