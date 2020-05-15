function newsletterload() {
  window.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
    L.start({
      baseUrl: "mc.us18.list-manage.com",
      uuid: "4fb4f9a007a38d92b6ff0e32f",
      lid: "970b32dd0e",
      uniqueMethods: true,
    });
  });
}

onloadeddata = (function() {
  console.log("Data loaded!");
  newsletterload();
})();
