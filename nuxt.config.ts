// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],
  eslint: {
    cache: false,
    include: ["src/**/*.{js,jsx,ts,tsx,vue}"]
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
