<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H3_Text_Avatar from '../../H3_Text_Avatar.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import List1 from '../../List1.svelte';
  import Col2 from '../../Col2_3.svelte';
  import people from '../../../helpers/people';
  const { dubov } = people;
  import content, { icons, icons2 } from '../content/regulators';
</script>

<Layout>
  <H3_Text_Avatar
    h3="{content[lang].h3}"
    text="{content[lang].p}"
    person="{dubov}"
  />
  <h5>{content[lang].h5}</h5>
  <List1
    icons="{icons}"
    titles="{content[lang].titles}"
    texts="{content[lang].texts}"
  />
  <Col2>
    <div slot="right">
      <div class="quote">
        {@html content[lang].quote}
      </div>
    </div>
    <div slot="left">
      <div class="flex">
        {#each icons2 as item}
          <svelte:component this="{item}" />
        {/each}
      </div>
      <div class="caption">{content[lang].caption}</div>
    </div>
  </Col2>
</Layout>

<style>
  h5 {
    text-align: center;
    margin: 100px 0 90px;
  }
  .quote {
    margin-top: 60px;
    max-width: 530px;
    margin-bottom: 100px;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 230px;
    margin: 0 auto;
    width: 100%;
  }
  .caption {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    max-width: 260px;
		margin: 35px auto 200px;
  }
  @media only screen and (min-width: 960px) {
    h5 {
      text-align: left;
      margin: 90px 0 80px;
    }
    .quote {
      margin-top: 85px;
    }
    .flex {
      margin-top: 150px;
    }
    .caption {
      font-size: 14px;
      line-height: 17px;
      text-align: left;
      margin-top: 25px;
    }
  }
</style>
