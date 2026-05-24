import { haloThemePlugin } from "@halo-dev/vite-plugin-halo-theme";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [haloThemePlugin(), UnoCSS()],
  lint: { options: { typeAware: true, typeCheck: true }, ignorePatterns: [".agents"] },
  fmt: {
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    endOfLine: "lf",
    sortPackageJson: true,
    insertFinalNewline: true,
    sortImports: {},
    sortTailwindcss: {},
    ignorePatterns: [".agents"],
  },

});
