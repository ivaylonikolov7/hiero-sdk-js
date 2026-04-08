import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

export default {
    input: "src/index.js",
    output: {
        file: "dist/rollup/bundle.js",
        format: "es",
        sourcemap: true,
    },
    plugins: [
        nodeResolve({ browser: true, preferBuiltins: false }),
        commonjs(),
        json(),
        terser(),
    ],
    onwarn(warning, warn) {
        // Suppress circular dependency warnings from protobuf
        if (warning.code === "CIRCULAR_DEPENDENCY") return;
        warn(warning);
    },
};
