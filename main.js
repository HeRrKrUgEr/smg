const SitemapGenerator = require("sitemap-generator");

// create generator
const generator = SitemapGenerator("https://www.laosautrement.com", {
  stripQuerystring: false,
  lastMod: true,
});

// register event listeners
generator.on("done", () => {
  console.log("done");
});

// start the crawler
generator.on();
generator.start();
console.log("started");
