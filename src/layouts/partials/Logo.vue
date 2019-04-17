<template>
  <div class="logo">
    <g-link class="logo__link" to="/" title="Back to home">
      <p>gridsome-starter-docs</p>
    </g-link>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
.logo {
  p {
    color: var(--primary-color);
    &:hover {
      color: var(--primary-link-color);
    }
  }
}
</style>
