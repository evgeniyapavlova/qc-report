<script>
  export let lang;
  import logo from './img/logo.svg';
  import content, { content1 } from './content';
  import Block from './components/Block.svelte';
  import people from '../../helpers/people';
  import Layout from '../Layout.svelte';
  import H2_Text_Avatar from '../H2_Text_Avatar.svelte';
  const {
    rabinovich,
    taklalsingh,
    dudukina,
    kvashnin,
    zhdanovskaya,
    terekhova,
    zaytseva,
    kertling,
    golikov,
    kuklina,
    samburova,
    kutkova,
  } = people;
  const persons = [
    rabinovich,
    taklalsingh,
    dudukina,
    kvashnin,
    zhdanovskaya,
    terekhova,
    zaytseva,
    kertling,
    golikov,
    kuklina,
    samburova,
    kutkova,
  ];
</script>

<Layout>
  <H2_Text_Avatar h2="{content1[lang].h2}" text="{content1[lang].h4}" />
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

<style>
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
