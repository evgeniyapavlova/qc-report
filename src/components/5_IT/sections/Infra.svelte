<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H3_Text_Avatar from '../../H3_Text_Avatar.svelte';
  import Icon_Number_P from '../../Icon_Number_P.svelte';
  import LineNumberItem from '../../LineNumberItem.svelte';
  const votintsev = {
    name: 'Dmitriy Votintsev',
    position: 'Chief of IT Operations',
    photo: 'votintsev',
  };
  import content, { icons } from '../content/infra';
</script>

<Layout>
  <div class="infra-h3-avatar">
    <H3_Text_Avatar
      person="{votintsev}"
      h3="{content[lang].h3}"
      text="{content[lang].p1}"
    />
  </div>
  <div class="flex">
    <div class="aside">
      <div class="list">
        {#each content[lang].items as item, index}
          <div class="item-wrap">
            <Icon_Number_P icon="{icons[index]}" text="{item}" />
          </div>
        {/each}
      </div>
    </div>
    <div class="content">
      <div class="quote">{@html content[lang].quote}</div>
      <div class="text">
        <h5 class="red">
          {@html content[lang].h5}
        </h5>
        <p>
          {@html content[lang].p2}
        </p>
      </div>
      <div class="number-item">
        <LineNumberItem
          period="26 <span>2019</span>"
          number="118"
          caption="IT vendors"
        />
      </div>
    </div>
  </div>
</Layout>

<style>
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    width: 190px;
    padding: 0 10px;
    margin-bottom: 75px;
  }
  .infra-h3-avatar {
    margin-bottom: 90px;
  }
  .quote {
    margin-top: 40px;
    max-width: 530px;
  }
  h5 {
    margin: 88px 0 19px;
  }
  p {
    margin-bottom: 44px;
  }
  .flex {
    margin-bottom: 150px;
  }
  @media only screen and (min-width: 960px) {
    :global(.infra-h3-avatar h3, .infra-h3-avatar p) {
      width: 58%;
      margin-left: auto;
      margin-right: 0;
      padding-right: 0 !important;
    }
    :global(.infra-h3-avatar .wrap-avatar) {
      right: auto;
      left: 0;
    }
    .flex {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    }
    .aside {
      width: 58%;
    }
    .content {
      max-width: 41%;
      flex-grow: 1;
    }
    .list {
      text-align: left;
      justify-content: flex-end;
    }
    .item-wrap {
      width: 33%;
      padding: 0 10% 0 0;
      margin-bottom: 65px;
    }
    .content {
      display: flex;
      flex-direction: column;
    }
    .text {
      order: 1;
      width: 80%;
    }
    .number-item {
      order: 2;
    }
    .quote {
      order: 3;
    }
    h5 {
      margin-top: 65px;
    }
    p {
      margin-bottom: 35px;
    }
    .quote {
      margin-top: 75px;
      margin-right: -50%;
    }
  }
</style>
