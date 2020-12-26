{#each [1, 2, 3, 4] as i}
  <img
    src="ASSET_PREFIX/assets/intro/cube{i}.png"
    alt=""
    class="cube cube{i}"
  />
{/each}

<style>
  .cube {
    position: absolute;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  .cube1 {
    width: 115px;
    left: 5%;
    top: 70%;
    animation-duration: 5s;
    animation-name: cube1;
  }
  .cube2 {
    top: 10%;
    left: 45%;
    animation-duration: 7s;
    animation-name: cube2;
  }
  .cube2,
  .cube3 {
    width: 105px;
  }
  .cube3 {
    right: 20%;
    bottom: 10%;
    animation-duration: 9s;
    animation-name: cube2;
  }
  .cube4 {
    width: 100px;
    right: 5%;
    top: 20%;
    animation-name: cube1;
    animation-duration: 6s;
  }
  @keyframes cube1 {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(20px);
    }

    100% {
      transform: translateY(0);
    }
  }
  @keyframes cube2 {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(20px);
    }

    100% {
      transform: translateY(0);
    }
  }
  @media only screen and (max-width: 800px) {
    .cube1 {
      width: 92px;
    }
    .cube2,
    .cube3 {
      width: 83px;
    }
    .cube4 {
      width: 65px;
    }
  }
  @media only screen and (max-width: 639px) {
    .cube1 {
      top: 500px;
    }
    .cube2 {
      left: auto;
      right: 24px;
    }
    .cube3 {
      top: 700px;
      right: 10%;
    }
  }
  @media only screen and (max-width: 560px) {
    .cube4 {
      display: none;
    }
  }
  @media only screen and (max-width: 400px) {
    .cube1 {
      top: 410px;
    }
  }
</style>
