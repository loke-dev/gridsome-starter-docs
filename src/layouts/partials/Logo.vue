<template>
  <div class="logo">
    <g-link class="logo__link" to="/" title="Back to home">
      <Logo class="logo__svg" alt="logo"/>
    </g-link>
  </div>
</template>

<script>
import Logo from "~/assets/images/gridsome-logo.svg";
export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
.logo {
  svg {
    max-width: 140px;
    height: auto;
    margin-top: -3px;
  }
  &:hover {
    opacity: 0.8;
  }
}
</style>
