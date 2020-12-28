<slot />

<style>
  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    src: url('ASSET_PREFIX/assets/fonts/proximanova-bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    src: url('ASSET_PREFIX/assets/fonts/proximanova-medium.woff2')
      format('woff2');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    src: url('ASSET_PREFIX/assets/fonts/proximanova-regular.woff2')
      format('woff2');
    font-weight: 400;
    font-display: swap;
  }
  :global(body) {
    margin: 0;
    font-family: Proxima Nova, -apple-system, BlinkMacSystemFont, Segoe UI,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #323e48;
    background-color: #f5f5f5;
    min-width: 320px;
  }
  :root {
    --dark-gray: #323e48;
    --red: #e62334;
  }
  :global(h4) {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: rgba(50, 62, 72, 0.5);
  }
  :global(h5.red) {
    color: var(--red);
  }
  :global(h5) {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }
  :global(p) {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.25;
  }
  :global(.quote) {
    font-weight: 600;
    font-size: 30px;
    line-height: 1.05;
  }
  :global(h3 span) {
    color: var(--red);
  }
  :global(h3) {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 32px;
  }
  :global(h4.h4-title) {
    color: rgba(50, 62, 72, 1);
  }
  :global(h2) {
    font-weight: 700;
    color: var(--dark-gray);
    font-size: 24px;
    line-height: 1;
    margin-bottom: 68px;
    border-left: 4px solid var(--red);
    padding-left: 15px;
  }
  :global(.h2-no-border) {
    font-weight: 700;
    color: var(--dark-gray);
    font-size: 24px;
    line-height: 1;
  }
  :global(.red-link) {
    color: red;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-decoration: underline;
    display: block;
  }
  @media only screen and (min-width: 400px) {
    :global(h3) {
      font-size: 30px;
    }
  }
  @media only screen and (min-width: 480px) {
    :global(h2) {
      font-size: 36px;
      margin-bottom: 60px;
    }
    :global(.quote) {
      font-size: 36px;
    }
  }
  @media only screen and (min-width: 960px) {
    :global(.h2-no-border) {
      font-size: 36px;
      line-height: 36px;
    }
    :global(p) {
      font-size: 16px;
    }
    :global(h5) {
      font-size: 18px;
      line-height: 22px;
    }
    :global(h3) {
      font-size: 26px;
      line-height: 26px;
    }
    :global(h2) {
      margin-bottom: 55px;
    }
    :global(h4) {
      font-size: 20px;
      line-height: 24px;
    }
    :global(.red-link) {
      font-size: 13px;
      line-height: 16px;
    }
  }

  :global(h1) {
    color: var(--dark-gray);
    font-size: 30px;
    line-height: 1;
    font-weight: 700;
    margin-bottom: 65px;
    border-left: 4px solid var(--red);
    padding-left: 22px;
  }

  @media only screen and (min-width: 480px) {
    :global(h1) {
      font-size: 48px;
    }
  }

  @media only screen and (min-width: 960px) {
    :global(h1) {
      margin-bottom: 100px;
    }
  }
  :global(h6) {
    font-size: 14px;
    font-weight: bold;
  }
  :global(.p-with-links a) {
    color: var(--red);
    font-weight: bold;
  }
  :global(.chart-label) {
    font-size: 13px;
    line-height: 16px;
    color: rgba(50, 62, 72, 0.5);
  }
</style>
