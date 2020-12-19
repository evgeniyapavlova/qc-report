<script>
  export let person, title, text, quote, numbers, reverse, img, title2, text2;
  import Avatar from '../../Avatar.svelte';
  import NumbersList from '../../NumbersList.svelte';
</script>

<div class="block block-{img} {reverse ? 'block-reverse' : 'block-normal'}">
  <img src="{`/assets/countries/${img}.jpg`}" alt="" />
  <div class="content">
    <h3>{title}</h3>
    <div class="avatar-wrap">
      <Avatar {...person} />
    </div>
    <div class="quote">{quote}</div>
    <div class="reverse">
      <NumbersList dataArray="{numbers}" />
      <p>
        {@html text}
      </p>
    </div>
    {#if title2}
      <div class="extra">
        <img class="extra-img" src="/assets/countries/australia.jpg" alt="" />
        <h3>{title2}</h3>
        <p>{text2}</p>
      </div>
    {/if}
  </div>
</div>

<style>
  h3 {
    margin-bottom: 75px;
    max-width: 170px;
  }
  .block {
    margin-bottom: 200px;
    position: relative;
  }
  .block > * {
    position: relative;
  }
  .quote {
    margin: 65px 0 40px;
    max-width: 340px;
  }
  .block img {
    position: absolute;
  }
  .block-latam {
    padding-top: 60px;
  }
  .block-europe {
    padding-top: 138px;
  }

  .block-africa img {
    right: 0;
    top: 0;
    width: 189px;
  }
  .block-china {
    padding-top: 80px;
  }
  .block-china img {
    width: 292px;
    top: -20px;
    left: 100px;
  }
  .block-europe img:not(.extra-img) {
    width: 292px;
    right: -50px;
    top: 0;
  }
  .block-latam img {
    width: 292px;
    right: 0;
    top: 0;
  }
  .block-asia {
    padding-top: 60px;
  }
  .block-asia img {
    width: 291px;
    left: 76px;
    top: 0;
  }
  .extra {
    padding-top: 180px;
    position: relative;
  }
  .extra h3,
  .extra p {
    position: relative;
  }
  .extra-img {
    position: absolute;
    width: 190px;
    top: 50px;
    right: 0;
  }
  @media only screen and (min-width: 540px) {
    .block-africa img {
      width: 254px;
      right: auto;
      left: 50%;
    }
    .block-china img {
      width: 345px;
      left: 40%;
    }
    .block-latam img {
      width: 344px;
      right: auto;
      left: 230px;
    }
    .block-europe img:not(.extra-img) {
      width: 345px;
    }
    .extra-img {
      width: 215px;
      left: 60%;
      right: auto;
    }
    .block-asia img {
      width: 527px;
      left: 40%;
    }
  }
  @media only screen and (min-width: 850px) {
    .block-africa img {
      left: auto;
      right: 0;
      top: 100px;
    }
    .block-china {
      padding-top: 0;
    }
    .block-china img {
      left: -4%;
      top: 36px;
    }

    .block-asia img {
      top: 53px;
      left: 52%;
    }
    .extra {
      padding-top: 40px;
    }
    .extra-img {
      left: 0;
      transform: translateX(-105%);
      top: -50px;
    }
    .block-europe {
      padding-top: 0;
    }
    .block-europe img:not(.extra-img) {
      top: 52px;
      right: auto;
      left: 6px;
    }
    .block-latam img {
      left: 360px;
    }
    .avatar-wrap {
      position: absolute;
      top: 0;
    }
    .quote {
      position: absolute;
      bottom: 0;
      z-index: 1;
    }
    .block-normal .avatar-wrap {
      right: 0;
    }
    .block-normal .quote {
      right: 0;
    }
    .block-reverse .avatar-wrap {
      left: 0;
    }
    .block-reverse .quote {
      left: 0;
    }
    .reverse {
      display: flex;
      flex-direction: column-reverse;
      max-width: 530px;
    }
    .extra,
    h3 {
      max-width: 530px;
    }
    p {
      margin-bottom: 50px;
    }
    .block-reverse .reverse,
    .block-reverse .extra,
    .block-reverse h3 {
      margin-left: auto;
      margin-right: 0;
    }
    .block {
      margin-bottom: 130px;
    }
    .quote {
      font-size: 30px;
      width: calc(100% - 550px);
    }
  }
  @media only screen and (min-width: 960px) {
    .block-asia img {
      left: 50%;
      top: -7px;
    }
    .quote {
      font-size: 36px;
    }
    h3 {
      margin-bottom: 35px;
    }
    .block-europe img:not(.extra-img) {
      top: 77px;
      left: 43px;
    }
    .block-china img {
      left: 7%;
    }
  }
  @media only screen and (min-width: 1050px) {
    .block-africa img {
      right: 223px;
      top: 47px;
    }
  }
  @media only screen and (min-width: 1115px) {
    .block-latam img {
      left: 420px;
    }
    .block-europe img:not(.extra-img) {
      top: 51px;
      left: 175px;
    }
    .block-china img {
      left: 150px;
    }
  }
</style>
