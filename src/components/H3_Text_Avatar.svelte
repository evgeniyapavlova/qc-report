<script>
  import Avatar from './Avatar.svelte';
  export let person, h3, text;
</script>

<div class="wrap">
  <h3>
    {@html h3}
  </h3>
  <div class="flex">
    {#if person}
      <div class="wrap-avatar">
        <Avatar {...person} />
      </div>
    {/if}
    <p>
      {@html text}
    </p>
  </div>
</div>

<style>
  p {
    margin-top: 40px;
    max-width: 618px;
  }
  h3 {
    max-width: 618px;
    margin-bottom: 60px;
  }
  @media only screen and (min-width: 800px) {
    .flex {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: flex-end;
    }
    p {
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
    p {
      width: calc(100% - 350px);
      margin-top: 18px;
    }
    .wrap {
      position: relative;
    }
    .flex {
      display: block;
    }
    h3 {
      margin-bottom: 18px;
    }
  }
</style>
