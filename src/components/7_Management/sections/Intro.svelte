<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H1_Text_Avatar from '../../H1_Text_Avatar.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import content, { icons } from '../content/intro';
  import people from '../../../helpers/people';
  const { bezrodnaya } = people;
</script>

<section>
  <Layout>
    <H1_Text_Avatar
      person="{bezrodnaya}"
      h1="{content[lang].h1}"
      text="{content[lang].h4}"
    />
    <h5 class="red">{content[lang].title2}</h5>
    <div class="list">
      {#each content[lang].titles as item, index}
        <div class="item-wrap">
          <Icon_Title_Text
            icon="{icons[index]}"
            title="{item}"
            text="{content[lang].texts[index]}"
          />
        </div>
      {/each}
      <div class="quote">
        {@html content[lang].quote}
      </div>
    </div>
  </Layout>
</section>

<style>
  .quote {
    text-align: left;
    max-width: 530px;
    margin: 65px auto 0 0;
  }
  section {
    padding-top: 64px;
  }
  h5 {
    margin: 125px 0 80px;
    text-align: center;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    margin-bottom: 70px;
    max-width: 280px;
    padding: 0 10px;
  }
  @media only screen and (min-width: 960px) {
    section {
      padding-top: 124px;
    }
    h5 {
      margin: 85px 0 76px;
      text-align: left;
    }
    .list {
      justify-content: flex-start;
      text-align: left;
    }
    .item-wrap {
      width: 33%;
      min-width: 33%;
      padding: 0 8% 0 0;
			margin-bottom: 80px;
    }
    .quote {
      max-width: 33%;
			margin-top: 0;
    }
  }
</style>
