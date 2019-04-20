<template>
  <div class="logo">
    <g-link class="logo__link" to="/" title="Back to home">
      <Logo class="logo__image" alt="logo"/>
      <p>Gridsome starter docs</p>
    </g-link>
  </div>
</template>

<script>
import Logo from '~/assets/images/logo-circle-light.svg'
export default {
  components: {Logo}
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
  .logo__link {
    display: flex;
    align-items: center;
  }
  .logo__image {
    height: 20px;
    width: auto;
    margin: 0 10px 0 0;
  }
}
</style>
