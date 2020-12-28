<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Col2 from '../../Col2.svelte';
  import content, { icons } from '../content/dataPlatform';
</script>

<Layout>
  <div class="text">
    <h3>
      {@html content[lang].h3}
    </h3>
    <p>
      {@html content[lang].p}
    </p>
  </div>
  <Col2>
    <div slot="right">
      <div class="list">
        {#each content[lang].items as item, index}
          <div class="item-wrap">
            <Icon_Title_Text
              icon="{icons[index]}"
              title="{item.title}"
              text="{item.text}"
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

<style>
  .quote {
    margin-top: 30px;
		margin-bottom: 150px;
    max-width: 530px;
  }
  h3 {
    margin-bottom: 19px;
  }
  .text {
    margin-bottom: 90px;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    max-width: 350px;
    padding: 0 17px;
    margin-bottom: 75px;
  }
  @media only screen and (min-width: 960px) {
    .text {
      width: 50%;
    }
    .list {
      text-align: left;
      justify-content: space-between;
			margin-bottom: 180px;
    }
    .item-wrap {
      padding: 0 12% 0 0;
      margin-bottom: 0;
      width: 50%;
    }
    .quote {
      margin-top: 0;
			margin-bottom: 0;
    }
  }
</style>
