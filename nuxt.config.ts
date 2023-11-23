// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxtjs/eslint-module"
  ],
  eslint: {
    cache: false,
    include: ["src/**/*.{js,jsx,ts,tsx,vue}"],
    eslintPath: "eslint",
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
  },
  ui: {
    global: true,
    icons: ["mdi", "simple-icons"]
  }
});
