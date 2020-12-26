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
      {#if person}
        <Avatar {...person} />
      {/if}
    </div>
    <h4>{text}</h4>
  </div>
</div>

<style>
  h4 {
    margin-top: 40px;
    max-width: 618px;
  }
  h1 {
    max-width: 618px;
    margin-right: 40px;
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
      width: 33%;
      display: flex;
      justify-content: flex-end;
    }
    h4,
    h1 {
      width: 58%;
    }
    .wrap {
      position: relative;
    }
    .flex {
      display: block;
    }
  }
</style>
