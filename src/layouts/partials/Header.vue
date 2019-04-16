<template>
  <header>
    <div class="header-inner container flex gap-30">
      <Logo/>

      <Nav class="flex-fit"/>

      <nav class="header-actions flex">
        <a
          aria-label="github"
          href="//github.com/LokeCarlsson/gridsome-starter-docs"
          rel="noopener noreferrer"
          target="_blank"
          title="gridsome-starter-docs"
        >
          <github-logo height="20px" width="20px"/>
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
import Nav from "./Nav";
import GithubLogo from "@/assets/images/github-logo.svg";

export default {
  components: {
    Logo,
    GithubLogo,
    Nav
  }
};
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top: 0;
  background: var(--secondary-bg);
  color: #fff;
  border-bottom: 1px solid transparent;
  flex-wrap: nowrap;
  position: sticky;

  .header-inner {
    min-height: var(--header-height);
  }
}

@media screen and (max-width: 750px) {
  header {
    .logo {
      margin-right: 0;
    }
  }
  .header-actions {
    margin-left: auto !important;
    font-size: 0.9rem;
  }
}
</style>
