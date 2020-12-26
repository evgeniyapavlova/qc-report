<script>
  export let lang;
  import icon1_1 from '../img/homeless.svg';
  import icon1_2 from '../img/box.svg';
  import icon1_3 from '../img/dog.svg';
  import icon1_4 from '../img/stroke.svg';

  import content from '../content/corporate';
  const { fishkoshop } = content[lang];
  import Col2_5_6 from '../../Col2_5_6.svelte';
  import List_Icon_Number_P from '../../List_Icon_Number_P.svelte';
  const icons1 = [icon1_1, icon1_2, icon1_3, icon1_4];
</script>

<Col2_5_6>
  <div slot="right">
    <h5 class="red">{fishkoshop.title}</h5>
    <p>{fishkoshop.p}</p>
  </div>
  <div slot="left">
    <div class="quote">{fishkoshop.quote}</div>
  </div>
</Col2_5_6>
<List_Icon_Number_P
  titles="{[78, 73, 48, '₽41 700']}"
  texts="{fishkoshop.items}"
  icons="{icons1}"
/>

<style>
  h5 {
    margin-bottom: 18px;
  }
  p {
    margin-bottom: 80px;
  }
  .quote {
    max-width: 530px;
		margin-bottom: 80px;
  }
  @media only screen and (min-width: 960px) {
    p {
      margin-bottom: 0;
    }
  }
</style>
