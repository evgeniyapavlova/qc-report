<slot />

<style>
  :root {
    --dark-gray: #323e48;
    --red: #e62334;
  }
  :global(h4) {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    opacity: 0.6;
  }
  :global(h5) {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }
  :global(p) {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  :global(.quote) {
    font-weight: 600;
    font-size: 30px;
    line-height: 1.05;
  }
  :global(h3) {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 32px;
  }

  :global(h3:after, .quote:after) {
    content: '';
    height: 4px;
    background-color: var(--red);
    display: block;
  }
  :global(h3:after) {
    margin-top: 10px;
    width: 80px;
  }
  :global(.quote:after) {
    margin-top: 15px;
    width: 190px;
  }
  @media only screen and (min-width: 480px) {
    :global(h3) {
      font-size: 30px;
    }
    :global(.quote) {
      font-size: 36px;
    }
  }
  @media only screen and (min-width: 960px) {
    :global(p) {
      font-size: 16px;
      line-height: 20px;
    }
    :global(h5) {
      font-size: 18px;
      line-height: 22px;
    }
    :global(h3) {
      font-size: 26px;
      line-height: 26px;
    }
    :global(h3:after) {
      margin-top: 14px;
      width: 72px;
    }
  }
</style>
