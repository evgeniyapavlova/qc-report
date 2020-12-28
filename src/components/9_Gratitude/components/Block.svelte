<script>
  export let person, text, quote, index;
  import Avatar from '../../Avatar.svelte';
</script>

<div class="block block-{(index + 1) % 2 === 0 ? 'reverse' : 'normal'}">
  <div class="quote">
    {@html quote}
  </div>
  <div class="avatar-wrap">
    <Avatar {...person} />
  </div>
  <p>
    {@html text}
  </p>
</div>

<style>
  .block {
    position: relative;
    margin-bottom: 180px;
  }
  .quote {
    margin-bottom: 35px;
  }
  p {
    margin-top: 70px;
  }
  @media only screen and (min-width: 960px) {
    p {
      margin-top: 35px;
    }
    .quote {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 41%;
      margin-bottom: 0;
    }
    p,
    .avatar-wrap {
      width: 50%;
    }
    .block {
      margin-bottom: 250px;
    }
    .block-normal .quote {
      right: 0;
    }
    .block-reverse .quote {
      left: 0;
    }
    .block-reverse p,
    .block-reverse .avatar-wrap {
			margin-right: 0;
			margin-left: auto;
    }
  }
</style>
