import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    css({ output: "bundle.css" }),
    vue({
      target: "browser",
      preprocessStyles: true,
      defaultLang: { script: "ts" },
      compiler: require("@vue/compiler-sfc"),
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
      rootDir: "src",
      include: ["src/**/*.ts"],
      exclude: ["**/*.vue"],
    }),
  ],
  external: ["vue"],
};
