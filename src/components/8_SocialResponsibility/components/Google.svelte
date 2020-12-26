<script>
  export let lang;
  import content, { icons3 } from '../content/fund';
  import Col2_5_6 from '../../Col2_5_6.svelte';
  import List2 from '../../List2.svelte';
</script>

<Col2_5_6>
  <div slot="right">
    <h5>Ok, Google!</h5>
    <p class="p-with-links">
      {@html content[lang].google.text}
    </p>
  </div>
  <div slot="left">
    <div class="quote">{content[lang].google.quote}</div>
  </div>
</Col2_5_6>

<div class="wrap wrap-funds-google">
  <Col2_5_6 isReverse="{true}">
    <div slot="right">
      <h5>{content[lang].google.h5_2}</h5>
      <p class="p-with-links">
        {@html content[lang].google.text2}
      </p>
    </div>
    <div slot="left">
      <List2
        icons="{icons3}"
        titles="{['6 000', '400', '60']}"
        texts="{content[lang].google.texts}"
      />
    </div>
  </Col2_5_6>
</div>

<style>
  h5 {
    color: var(--red);
    margin-bottom: 18px;
  }
  .quote {
    margin-top: 50px;
    margin-bottom: 100px;
    max-width: 530px;
  }
  .wrap {
    margin-top: 120px;
		margin-bottom: 150px;
  }
  @media only screen and (min-width: 960px) {
    .quote {
      margin-top: 30px;
      margin-bottom: 0;
    }
    :global(.wrap-funds-google .item-wrap) {
      width: 33%;
    }
  }
</style>
