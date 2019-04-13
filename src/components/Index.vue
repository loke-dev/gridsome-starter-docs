<template>
  <Section class="home-intro">
    <div class="home-cols">
      <g-image class="home-cols__image" alt="logo" src="~/assets/images/logo.png"/>
      <h1 class="home-title">
        Gridsome starter documentation
      </h1>
      <p class="home-subtitle">A quick and easy way to setup a customizable documentation site powered by Gridsome.</p>
      <p class="home-links">
        <g-link to="/docs/quickstart" class="button primary button--large">Quickstart</g-link>
        <g-link to="/docs" class="button">Documentation</g-link>
      </p>
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
</style>
