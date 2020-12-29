<script>
  export let lang;
  import logo from './img/logo.svg';
  import content, { content1 } from './content';
  import Block from './components/Block.svelte';
  import Layout from '../Layout.svelte';
  import H1_Text_Avatar from '../H1_Text_Avatar.svelte';
  const persons = [
    {
      name: 'Anton Rabinovich',
      position: 'CEO',
      photo: 'rabinovich',
    },
    {
      name: 'Steve Taklalsingh',
      position: 'Director UK',
      photo: 'taklalsingh',
    },
    {
      name: 'Alina Dudukina',
      position: 'Head of Insights & Experiments',
      photo: 'dudukina',
    },
    {
      name: 'Vladimir Kvashnin',
      position: 'C++ developer',
      photo: 'kvashnin',
    },
    {
      name: 'Anna Zhdanovskaya',
      position: 'Educational events manager',
      photo: 'zhdanovskaya',
    },
    {
      name: 'Anastasiya Terekhova',
      position: 'Billing support officer',
      photo: 'terekhova',
    },
    {
      name: 'Nadezhda Zaytseva',
      position: 'Billing manager',
      photo: 'zaytseva',
    },
    {
      name: 'Rodion Kertling',
      position: 'Chief Data & Analysis Officer',
      photo: 'kertling',
    },
    {
      name: 'Sergey Golikov',
      position: 'Product owner',
      photo: 'golikov',
    },
    {
      name: 'Hristina Kuklina',
      position: 'UX/UI designer',
      photo: 'kuklina',
    },
    {
      name: 'Eva Samburova',
      position: 'Head of Strategic HR',
      photo: 'samburova',
    },
    {
      name: 'Irina Kutkova',
      position: 'Chief of Customer Care',
      photo: 'kutkova',
    },
  ];
</script>

<span data-id="thanks"></span>
<section>
  <Layout>
    <H1_Text_Avatar h1="{content1[lang].h2}" text="{content1[lang].h4}" />
    <div class="list">
      {#each content[lang] as item, index}
        <Block {...item} index="{index}" person="{persons[index]}" />
      {/each}
    </div>
    <div class="final">
      <p>{content1[lang].finalP}</p>
      <div class="quote">{content1[lang].finalQuote}</div>
      <h5 class="red">
        {@html content1[lang].finalRed}
      </h5>
      <svelte:component this="{logo}" />
    </div>
  </Layout>
</section>

<style>
  section {
    padding-top: 200px;
  }
  .list {
    margin-top: 135px;
  }
  .final {
    margin-top: 100px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 300px;
    text-align: center;
  }
  .final p {
    margin-bottom: 134px;
    max-width: 530px;
    margin-left: auto;
    margin-right: auto;
  }
  h5 {
    margin: 76px 0 104px;
  }
  @media only screen and (min-width: 960px) {
    .list {
      margin-top: 200px;
    }
  }
</style>
