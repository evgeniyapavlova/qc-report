<script>
  import Avatar from './Avatar.svelte';
  export let person, h1, text;
</script>

<div class="wrap">
  <h1>
    {@html h1}
  </h1>
  <div class="flex">
    <div class="wrap-avatar">
      <Avatar {...person} />
    </div>
    <h4>{text}</h4>
  </div>
</div>

<style>
  h4 {
    margin-top: 40px;
    max-width: 710px;
  }
  h1 {
    max-width: 710px;
  }
  @media only screen and (min-width: 800px) {
    .flex {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-start;
    }
    h4 {
      margin-top: 0;
      padding-right: 40px;
    }
  }
  @media only screen and (min-width: 960px) {
    .wrap-avatar {
      position: absolute;
      top: 0;
			right: 0;
    }
    h4 {
			width: calc(100% - 350px);
    }
    .wrap {
      position: relative;
    }
    .flex {
      display: block;
    }
  }
</style>
