<div class="wrap2020">
  <img src="ASSET_PREFIX/assets/intro/2020.jpg?1" alt="" />
</div>

<style>
  .wrap2020 {
    position: absolute;
    left: 40%;
    bottom: 50%;
    height: 704px;
    overflow: hidden;
  }

  @media only screen and (min-width: 640px) {
    .wrap2020 {
      transform: translateY(50%);
      animation-duration: 3s;
      animation-name: a2020;

      animation-iteration-count: 1;
    }
  }
  img {
    width: 614px;
  }

  @keyframes a2020 {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateY(50%);
    }
  }
  @media only screen and (max-width: 960px) {
    img {
      width: 400px;
    }
    .wrap2020 {
      bottom: 37%;
    }
  }

  @media only screen and (max-width: 850px) {
    .wrap2020 {
      bottom: 50%;
      left: auto;
      right: 50px;
      height: auto;
      width: 300px;
    }
    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 700px) {
    .wrap2020 {
      width: 250px;
    }
  }
  @media only screen and (max-width: 639px) {
    .wrap2020 {
      right: auto;
      bottom: auto;
      top: 470px;
      left: 24px;
      width: calc(100% - 48px);
      max-width: 450px;
    }
  }
  @media only screen and (max-width: 400px) {
    .wrap2020 {
      top: 420px;
    }
  }
</style>
