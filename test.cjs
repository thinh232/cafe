// test.cjs
const esbuild = require("esbuild");
const { createVuePlugin } = require("esbuild-plugin-vue");

esbuild
  .build({
    entryPoints: ["./src/components/login/LoginRegisterSocial.vue"],
    bundle: true,
    platform: "node",
    format: "cjs",
    outdir: "./dist",
    plugins: [createVuePlugin(/* options */)], // Thêm plugin Vue
  })
  .catch(() => process.exit(1));
