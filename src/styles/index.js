/* language=CSS */
export default `
  body {
    color: #212529;
    background: #f0f2f5;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 570px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 760px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 990px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`
