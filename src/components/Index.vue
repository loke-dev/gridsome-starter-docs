<template>
  <Section class="home-intro">
    <div class="home-cols grid-cols grid-cols--2 grid-cols--gap-small">
      <div class="home-cols__left">
        <h1 class="home-title">
          Gridsome starter
          <br>for building
          <br>documentation sites
        </h1>

        <p class="home-links">
          <g-link to="/docs/quickstart" class="button primary button--large">Quickstart</g-link>
          <g-link to="/docs" class="button">Documentation</g-link>
        </p>
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
  align-items: center;
  &__left {
    padding: 100px 5%;
  }
  &__right {
  }
}
.home-links {
  margin-top: 2.5rem;
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
</style>
