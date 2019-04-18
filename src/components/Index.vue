<template>
  <Section class="home-intro">
    <div class="home-cols">
      <g-image class="home-cols__image" alt="logo" src="~/assets/images/logo.png"/>
      <h1 class="home-title">Gridsome starter documentation</h1>
      <p
        class="home-subtitle"
      >A quick and easy way to setup a customizable documentation site powered by Gridsome.</p>
      <div class="home-links">
        <g-link to="/docs/quickstart" class="button primary button--large">Quickstart</g-link>
        <g-link to="/docs" class="button">Documentation</g-link>
      </div>
      <div class="features">
        <div class="feature">
          <h2>Quick setup</h2>
          <p>Get started quick with all basic functionality already added and configured.</p>
        </div>
        <div class="feature">
          <h2>Powerful features</h2>
          <p>Utilize the power of Vue.js and Gridsome for a powerful application.</p>
        </div>
        <div class="feature">
          <h2>Perfect scores</h2>
          <p>Gridsome brings perfect scored on Google Lighthouse out of the box.</p>
        </div>
      </div>
    </div>
  </Section>
</template>

<style lang="scss">
.home-intro {
  padding: 1.5% 0 !important;
  min-height: 600px;
}

.home-cols {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5vh;

  &__image {
    width: 250px;
    height: 250px;
  }
}
.home-links {
  margin-top: 2.5rem;

  a {
    margin-top: 10px;
  }
}

.home-lead {
  font-weight: 300;
}

.home-title {
  line-height: 1.3;
  font-size: 2.4rem;

  @media (max-width: 600px) {
    padding-top: 2rem;
    font-size: 1.8rem;
  }
}

.home-subtitle {
  max-width: 550px;
  font-size: 1.3rem;
  font-weight: 300;
  opacity: 0.8;
}

.features {
  border-top: 1px solid #57cea0d0;
  padding: 1.5rem 0;
  margin: 2.5rem 0 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
  width: 75%;
  max-width: 1200px;

  .feature {
    flex-grow: 1;
    flex-basis: 25%;
    max-width: 25%;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1.3rem;
      font-weight: 300;
      opacity: 0.8;
    }
  }
}
</style>
