<template>
  <main role="main">
    <div class="header-bar"></div>
    <div class="layout">
      <Header :siteName="$page.metadata.siteName" />
      <slot />
      <div class="footer">
        <div>
          <p>
            Made with ❤️ by
            <a target="_blank" class="link" href="https://manurua.es">Manu Rúa</a>
            y Alexis Martínez
          </p>
        </div>
        <div class="footer-links">
          <a target="_blank" href="/sitemap.xml">Sitemap</a>
          <a target="_blank" href="/feed.xml">RSS Feed</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
body {
  background-color: var(--app-background-color);
  color: var(--app-font-color);
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 1.1em;
}
.layout {
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
}
.header-bar {
  background: linear-gradient(
    90deg,
    var(--app-header-bar-secondary-1),
    var(--app-header-bar-primary) 50%,
    var(--app-header-bar-secondary-2)
  );
  padding: 3px;
  text-align: center;
  color: #fff;
  font-size: 1rem;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  font-size: 0.8em;
}

.footer a {
  color: gray;
}

.footer-links a {
  margin: 0 4px;
}

a {
  border-bottom: 1px solid currentColor;
  color: var(--app-link-color);
  text-decoration: none;
}
a:hover {
  border-bottom-color: currentColor;
  color: var(--app-header-bar-secondary-1);
}

@media only screen and (max-width: 500px) {
  .footer {
    flex-direction: column;
  }

  .header {
    h1 {
      font-size: 1em;
    }
  }
}
</style>
