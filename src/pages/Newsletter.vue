<template>
  <Layout>
    <div id="newsletter-form">
      <h3>¡Suscríbete a la newsletter!</h3>
      <small>Recibirás las novedades en las que estamos trabajando.</small>
      <form
        action="https://gosevilla.us18.list-manage.com/subscribe/post?u=4fb4f9a007a38d92b6ff0e32f&amp;id=970b32dd0e"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            value
            name="EMAIL"
            class="email"
            id="mce-EMAIL"
            placeholder="Correo electrónico"
            required
          />
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_4fb4f9a007a38d92b6ff0e32f_970b32dd0e" tabindex="-1" value />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Suscríbete"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </div>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Go Sevilla"
  }
};
</script>

<page-query>
query {
  
  metadata {
    siteName
    siteDescription
  }

}
</page-query>

<style>
#newsletter-form {
  border: 3px solid transparent;

  border-image: linear-gradient(
    90deg,
    var(--app-header-bar-secondary-1),
    var(--app-header-bar-primary) 50%,
    var(--app-header-bar-secondary-2)
  );
  border-image-slice: 1;
  padding: 16px;
  border-radius: 4px;
  position: sticky;
  top: 48px;
  text-align: center;
  margin-top: 48px;
  padding-top: 48px;
}
.button {
  background: linear-gradient(
    90deg,
    var(--app-header-bar-secondary-1),
    var(--app-header-bar-primary) 50%,
    var(--app-header-bar-secondary-2)
  );
  border-color: #1890ff;
  border-radius: 4px;
  border: 0;
  box-shadow: 0 2px 0 #0000000b;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  line-height: 38px;
  outline: 0;
  padding: 0 15px;
  text-align: center;
  text-decoration: none;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
}

input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  display: inline-block;
  font-feature-settings: "tnum";
  font-size: 14px;
  font-variant: tabular-nums;
  height: 32px;
  line-height: 32px;
  list-style: none;
  margin: 0;
  outline: 0;
  padding: 4px 11px;
  transition: all 0.3s;
  width: 100%;
}
#newsletter-form input {
  margin-right: 4%;
  margin-bottom: 16px;
}
</style>
