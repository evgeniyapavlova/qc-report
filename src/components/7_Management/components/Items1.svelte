<script>
  export let lang;
  import content, { icons2 } from '../content/peoplePartners';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  const numbers = [54, 58, 31, 27];
</script>

<div class="wrap">
  <h5>{content[lang].caption}</h5>

  <div class="list">
    {#each content[lang].items3 as item, index}
      <div class="item-wrap">
        <Icon_Number_Text
          icon="{icons2[index]}"
          title="{numbers[index]}"
          text="{item}"
        />
      </div>
    {/each}
  </div>
</div>

<style>
  h5 {
    margin-bottom: 95px;
    text-align: center;
  }
  .wrap {
    margin-top: 110px;
    margin-bottom: 80px;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .item-wrap {
    max-width: 170px;
    padding: 0 10px;
    margin-bottom: 75px;
  }
  @media only screen and (min-width: 960px) {
    .wrap {
      display: flex;
      align-items: center;
    }
    .item-wrap {
      padding: 0 20px 0 0;
			width: 25%;
			margin-bottom: 0;
    }
    h5 {
      text-align: left;
			width: 33%;
			margin-bottom: 0;
    }
    .list {
			width: 66%;
      text-align: left;
      justify-content: flex-start;
    }
  }
</style>
