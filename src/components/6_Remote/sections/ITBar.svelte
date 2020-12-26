<script>
  export let lang;
  import { content, icons1, icons2, numbers } from '../content/itbar';
  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar_Reverse.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Col2 from '../../Col2_Reverse.svelte';
  import people from '../../../helpers/people';
  const { kurbatov } = people;
</script>

<section>
  <Layout>
    <H2_Text_Avatar
      h2="IT Bar"
      text="{content[lang].desc}"
      person="{kurbatov}"
      isReverse="{true}"
    />
    <Col2>
      <div slot="right">
        <div class="list">
          {#each content[lang].items as item, index}
            <div class="item-wrap">
              <Icon_Number_Text
                icon="{icons1[index]}"
                title="{numbers[index]}"
                text="{item}"
              />
            </div>
          {/each}
        </div>
      </div>
      <div slot="left">
        <div class="quote">{content[lang].quote}</div>
      </div>
    </Col2>
  </Layout>
</section>

<style>
  section {
    padding-top: 100px;
  }
  .list {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 70px;
    margin-bottom: 40px;
  }
  .item-wrap {
    width: 50%;
    padding: 0 17px;
    margin-bottom: 40px;
    max-width: 204px;
  }
  .quote {
    max-width: 530px;
  }
  @media only screen and (min-width: 960px) {
    .list {
      text-align: left;
      margin-top: 0;
			margin-bottom: 0;
    }
    .quote {
      margin-top: 105px;
    }
    .item-wrap {
      margin-bottom: 60px;
      padding: 0 20px 0 0;
    }
  }
</style>
