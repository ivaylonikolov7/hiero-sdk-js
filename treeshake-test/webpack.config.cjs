const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env = {}) => ({
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/webpack"),
    },
    resolve: {
        alias: {
            "process/browser": require.resolve("process/browser"),
            // Point directly to ESM source for tree-shaking testing
            "@hiero-ledger/sdk": path.resolve(__dirname, "../src/browser.js"),
        },
        mainFields: ["module", "browser", "main"],
        fallback: {
            crypto: false,
            fs: false,
            path: false,
            os: false,
            stream: false,
            vm: false,
            module: false,
            net: false,
            tls: false,
            child_process: false,
            "internal/bootstrap/loaders": false,
            buffer: require.resolve("buffer/"),
            process: require.resolve("process/browser"),
        },
    },
    plugins: [
        ...(env.analyze
            ? [new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false })]
            : []),
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
            process: "process/browser",
        }),
        // Ignore the dynamic require() in import-sync/esm — it pulls in the
        // full proto package at build time even though it's only used at runtime
        // with specific minimal file paths.
        new webpack.IgnorePlugin({
            resourceRegExp: /^@hiero-ledger\/proto$/,
        }),
    ],
    optimization: {
        usedExports: true,
        minimize: true,
    },
    stats: {
        assets: true,
        modules: false,
        modulesSpace: 0,
    },
});
