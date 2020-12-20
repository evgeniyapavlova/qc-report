<div class="wrap2020">
  <img src="ASSET_PREFIX/assets/intro/2020.jpg?1" alt="" />
</div>

<style>
  .wrap2020 {
    position: absolute;
    left: 40%;
    bottom: 50%;
    height: 704px;
    transform: translateY(50%);
    animation-duration: 3s;
    animation-name: a2020;
    overflow: hidden;
    animation-iteration-count: 1;
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
      bottom: 30%;
    }
  }
  @media only screen and (max-width: 560px) {
    img {
      width: 300px;
    }
  }
  @media only screen and (max-width: 450px) {
    img {
      width: 200px;
    }
    .wrap2020 {
      left: auto;
      right: 0;
    }
  }
</style>
