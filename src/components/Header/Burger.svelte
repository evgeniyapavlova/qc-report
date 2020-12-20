<script>
  export let open = false;
</script>

<div class="btn-wrap" class:open on:click="{() => (open = !open)}">
  <div class="menu-btn">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </div>
</div>

<style>
  .btn-wrap {
    background-color: var(--red);
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 21px;
    transition: background-color ease-out 0.2s;
    cursor: pointer;
  }
  .btn-wrap:hover {
    background-color: rgba(230, 35, 52, 0.9);
  }
  .menu-btn {
    position: relative;
    display: flex;
    align-items: center;
    width: 24px;
    height: 20px;
    z-index: 1;
  }
  .line {
    display: block;
    position: absolute;
    width: 24px;
    height: 4px;
    background-color: #fff;
    transition-duration: 0.25s;
  }

  .menu-btn > .line1 {
    top: 0;
  }

  .menu-btn > .line2 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .menu-btn > .line3 {
    top: 16px;
  }

  .open .line1 {
    transform: rotate(45deg);
  }
  .open .line3 {
    transform: rotate(-45deg);
  }
  .open .line2 {
    width: 0;
  }
  .open .line1,
  .open .line3 {
    top: 7px;
  }
</style>
