<template>
  <footer class="text-center">
    <a class="plain" href="//gridsome.org" rel="noopener noreferrer" target="_blank">
      <logo class="gridsome-logo"/>
    </a>
  </footer>
</template>

<script>
import Logo from "@/../static/logos/logo-normal.svg";
export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
footer {
  font-size: 0.75rem;
  background-color: var(--primary-bg);
  padding: 20px;
  margin-top: 30px;

  @media screen and (max-width: 750px) {
    padding-bottom: 90px;
  }
}

.gridsome-logo {
  width: 120px;
  height: 30px;
}
</style>