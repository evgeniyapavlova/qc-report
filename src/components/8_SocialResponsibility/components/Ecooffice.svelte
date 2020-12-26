<script>
  export let lang = 'ru';
  import icon1_1 from '../img/plasticbottle.svg';
  import icon1_2 from '../img/glass.svg';
  import icon1_3 from '../img/can.svg';

  import content from '../content/corporate';
  const { ecooffice } = content[lang];
  import Col2_5_6 from '../../Col2_5_6.svelte';
  import H5_Red_P from '../../common/titles/H5_Red_P.svelte';
  import List2 from '../../List2.svelte';
</script>

<Col2_5_6 isReverse="{true}">
  <div slot="right">
    <div class="title-wrap">
      <H5_Red_P h5="{ecooffice.title}" p="{ecooffice.p}" />
    </div>
    <List2
      titles="{[120, 30, 26]}"
      texts="{ecooffice.items}"
      icons="{[icon1_1, icon1_2, icon1_3]}"
    />
  </div>
  <div slot="left">
    <div class="quote">{ecooffice.quote}</div>
  </div>
</Col2_5_6>

<style>
  h5 {
    margin-bottom: 19px;
  }
  .title-wrap {
    margin-bottom: 100px;
  }
  .quote {
    margin-top: 60px;
    max-width: 530px;
  }
  @media only screen and (min-width: 960px) {
    .title-wrap {
      margin-bottom: 60px;
    }
    .quote {
      margin-top: 0;
    }
  }
</style>
