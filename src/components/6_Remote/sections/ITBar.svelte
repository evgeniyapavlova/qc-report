<script>
  export let lang;
  import { content, icons1, icons2, numbers } from '../content/itbar';
  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar_Reverse.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Col2 from '../../Col2_Reverse.svelte';
  const kurbatov = {
    name: 'Evgenii Kurbatov',
    position: 'Head of Office System Administration',
    photo: 'kurbatov',
  };
</script>

<section>
  <Layout>
    <H2_Text_Avatar
      h2="IT Bar"
      text="{content[lang].desc}"
      person="{kurbatov}"
      isReverse="{true}"
    />
    <p class="p1">{content[lang].text}</p>
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
    <h5>{content[lang].title2}</h5>
    <div class="list2">
      {#each content[lang].items2 as item, index}
        <div class="item-wrap2">
          <Icon_Title_Text
            icon="{icons2[index]}"
            title="{item.title}"
            text="{item.text}"
          />
        </div>
      {/each}
    </div>
    <div class="final-text">
      <h5>{content[lang].finalText1}</h5>
      <p>{content[lang].finalText2}</p>
    </div>
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
  .list2 {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
  .item-wrap2 {
    width: 100%;
    max-width: 390px;
    padding: 0 17px;
    margin-bottom: 75px;
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
  h5 {
    margin: 80px 0;
    max-width: 440px;
  }
  .final-text h5 {
    margin-bottom: 20px;
  }
  .p1 {
    margin-top: 45px;
  }
  @media only screen and (min-width: 600px) {
    .item-wrap2 {
      width: 50%;
    }
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
    .list2 {
      text-align: left;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .item-wrap2 {
      width: 25%;
      padding: 0 22px 0 0;
    }
    h5 {
      margin-bottom: 55px;
    }
    .final-text h5 {
      margin-top: 0;
    }
    .final-text {
      width: 58%;
      margin: 0 0 0 auto;
    }
    .p1 {
      width: 58%;
      margin: 80px 0 0 auto;
    }
  }
</style>
