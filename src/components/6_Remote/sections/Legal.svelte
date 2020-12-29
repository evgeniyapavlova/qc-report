<script>
  export let lang;
  import pass from '../img/pass.svg';
  import content, { icons1 } from '../content/legal';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Col2 from '../../Col2_3.svelte';
  import Layout from '../../Layout.svelte';
  const khimchenko = {
    name: 'Tatyana Khimchenko',
    position: 'Head of International Legal',
    photo: 'khimchenko',
  };
</script>

<section>
  <Layout>
    <H2_Text_Avatar
      h2="Legal & Personnel Administration"
      text="{content[lang].desc}"
      person="{khimchenko}"
    />
    <Col2>
      <div slot="right">
        <h5>{content[lang].covid.title}</h5>
        <div class="flex">
          {#each content[lang].covid.items as item, index}
            <div class="item-wrap">
              <Icon_Number_Text text="{item}" icon="{icons1[index]}" />
            </div>
          {/each}
        </div>
      </div>
      <div slot="left">
        <p>{content[lang].text}</p>
        <div class="icon-wrap">
          <Icon_Number_Text
            icon="{pass}"
            title="148"
            text="{content[lang].text1}"
          />
        </div>
      </div>
    </Col2>
  </Layout>
</section>

<style>
  section {
    padding-top: 80px;
  }
  p {
    margin-bottom: 65px;
  }
  h5 {
    margin: 75px 0;
    text-align: center;
  }
  .flex {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }
  .item-wrap {
    width: 50%;
    padding: 0 17px;
    margin-bottom: 55px;
    max-width: 204px;
  }
  .icon-wrap {
    text-align: center;
    max-width: 170px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 960px) {
    h5 {
      margin-top: 125px;
      margin-bottom: 60px;
      text-align: left;
    }
    .flex {
      text-align: left;
      justify-content: flex-start;
      flex-wrap: nowrap;
    }
    .item-wrap {
      padding: 0 20px 0 0;
    }
    p {
      margin-bottom: 32px;
    }
    .icon-wrap {
      text-align: left;
      margin: 0 auto 0 0;
    }
  }
</style>
