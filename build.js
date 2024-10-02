const esbuild = require("esbuild");
const createVuePlugin = require("esbuild-plugin-vue");

esbuild
  .build({
    entryPoints: ["./src/components/login/LoginRegisterSocial.vue"],
    bundle: true,
    outfile: "dist/LoginRegisterSocial.js",
    plugins: [createVuePlugin()],
  })
  .catch(() => process.exit(1));
