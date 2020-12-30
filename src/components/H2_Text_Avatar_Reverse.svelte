<script>
  import Avatar from './Avatar.svelte';
  export let person, h2, text;
</script>

<div class="wrap">
  <h2>
    {@html h2}
  </h2>
  <div class="flex">
    {#if person}
      <div class="wrap-avatar">
        <Avatar {...person} />
      </div>
    {/if}
    <h4>{text}</h4>
  </div>
</div>

<style>
  h4 {
    margin-top: 40px;
  }
  @media only screen and (min-width: 800px) {
    .flex {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    h2 {
      width: 58%;
      margin-left: auto;
      margin-right: 0;
    }
    h4 {
      margin-top: 0;
      width: 58%;
      margin-left: auto;
      margin-right: 0;
    }
  }
  @media only screen and (min-width: 960px) {
    .wrap-avatar {
      position: absolute;
      top: 0;
      left: 0;
    }
    .wrap {
      position: relative;
    }
    .flex {
      display: block;
    }
  }
</style>
