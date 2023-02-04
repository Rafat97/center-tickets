import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";
// import nodeResolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

process.env.NODE_ENV = "production";

console.log("Expected Externals", [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  "./src",
  process.env.NODE_ENV,
]);

const extensions = [".js", ".jsx", ".ts", ".tsx"];

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // external(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      // postcss({
      //   // plugins: require('./postcss.config').plugins,
      //   // plugins: [
      //   //   require('postcss-import'),
      //   //   require('tailwindcss'),
      //   //   require('autoprefixer'),
      //   // ],
      //   // // modules: true,
      //   // minimize: true,
      //   // sourceMap: false,
      //   // // extract: false,
      //   // minimize: true,
      //   // modules: {
      //   //   // see generateScopedName options here
      //   //   // https://github.com/css-modules/postcss-modules
      //   //   generateScopedName: '[local]',
      //   // },
      // }),
      postcss(),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        extensions,
      }),
      terser(),
      del({ targets: ["dist/*"] }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
