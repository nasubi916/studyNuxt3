export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "@pinia/nuxt",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/eslint-module"
  ],
  eslint: {
    cache: false,
    eslintPath: "./eslintrc.js",
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "./tailwind.config",
    config: {},
    viewer: true
  }
});
