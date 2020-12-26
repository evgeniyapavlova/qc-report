<script>
  export let lang;
  import Col2 from '../../Col2.svelte';
  import List1 from '../../List1.svelte';
  import List2 from '../../List2.svelte';
  import content, { icons1, icons2 } from '../content/fund';
  import logo_python from '../img/logo_python.svg';
</script>

<Col2>
  <div slot="right">
    <h5>{content[lang].python.title}</h5>
    <p class="p-with-links">{content[lang].python.p}</p>
  </div>
  <div slot="left">
    <div class="img">
      <svelte:component this="{logo_python}" />
    </div>
  </div>
</Col2>
<div class="list-wrap">
  <List1
    icons="{icons1}"
    titles="{content[lang].python.titles}"
    texts="{content[lang].python.texts}"
  />
</div>
<div class="wrap1">
  <div class="quote">{content[lang].python.quote}</div>
  <img src="ASSET_PREFIX/assets/responsibility/python_ipad.jpg" alt="" />
  <div class="list-wrap2">
    <List2
      icons="{icons2}"
      titles="{['70 000', '4 000', '560']}"
      texts="{content[lang].python.texts2}"
    />
  </div>
</div>

<style>
  .wrap1 {
    position: relative;
  }
  h5 {
    color: var(--red);
    margin-bottom: 18px;
  }
  p {
    margin-bottom: 90px;
  }
  .list-wrap {
    margin-top: 115px;
    margin-bottom: 50px;
  }
  .list-wrap2 {
    position: relative;
  }
  .quote {
    max-width: 618px;
    margin-bottom: 42px;
    position: relative;
    z-index:1;
  }
  img {
    width: 100%;
    max-width: 708px;
    display: block;
    margin: 0 auto 70px;
  }
  @media only screen and (min-width: 960px) {
    .quote {
      margin-bottom: 200px;
    }
    .img {
      margin-top: 40px;
    }
    img {
      position: absolute;
      top: 68%;
			right: -10%;
      transform: translateY(-50%);
      z-index: 0;
    }
    .list-wrap {
      margin-top: 25px;
      margin-bottom: 115px;
    }
  }
</style>
