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
    max-width: 710px;
  }
  h2 {
    max-width: 530px;
  }
  @media only screen and (min-width: 800px) {
    .flex {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: flex-end;
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
