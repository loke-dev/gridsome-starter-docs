<template>
  <section class="section" :class="sectionClass">
    <div class="section--inner container" :class="sectionClassInner">
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  props: ["container"],
  computed: {
    sectionClassInner() {
      let classes = [];
      if (this.container) {
        classes.push("container-" + this.container);
      }
      return classes;
    }
  }
};
</script>

<style lang="scss">
.section {
  padding: calc(2.5% + var(--space)) 0;
  position: relative;
  width: 100%;
  flex: 1;

  &--primary {
    background-color: var(--primary-bg);
  }

  &--inner {
    position: relative;
    z-index: 2;
  }

  &--dark {
    color: rgba(255, 255, 255, 0.8);
    background: var(--secondary-bg);

    p {
      color: currentColor;
    }

    h1,
    h2,
    h3,
    h4,
    a {
      color: #fff;
    }
  }
}
</style>
