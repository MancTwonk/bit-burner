import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "dist/index.js",
  output: {
    file: "bin/build.js",
  },
  plugins: [nodeResolve()],
};
