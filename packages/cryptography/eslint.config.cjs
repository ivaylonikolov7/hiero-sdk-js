const { defineConfig } = require("eslint/config");

const globals = require("globals");

const { fixupConfigRules, fixupPluginRules } = require("@eslint/compat");

const tsParser = require("@typescript-eslint/parser");
const babelParser = require("@babel/eslint-parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const deprecation = require("eslint-plugin-deprecation");
const vitest = require("@vitest/eslint-plugin");
const js = require("@eslint/js");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

module.exports = defineConfig([
    {
        files: ["src/**/*.js"],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 6,
            sourceType: "module",

            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ["./tsconfig.json"],
                warnOnUnsupportedTypeScriptVersion: false,
            },
        },

        extends: fixupConfigRules(
            compat.extends(
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:jsdoc/recommended",
                "plugin:import/errors",
                "plugin:import/typescript",
                "plugin:n/recommended",
                "plugin:compat/recommended",
            ),
        ),

        plugins: {
            "@typescript-eslint": fixupPluginRules(typescriptEslint),
            deprecation: fixupPluginRules(deprecation),
        },

        rules: {
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",

            "n/no-unsupported-features/es-syntax": [
                "error",
                {
                    ignores: ["dynamicImport", "modules"],
                },
            ],

            "@typescript-eslint/ban-ts-comment": "off",
            "jsdoc/valid-types": "off",
            "jsdoc/no-undefined-types": "off",
            "jsdoc/require-property-description": "off",
            "jsdoc/require-returns-description": "off",
            "jsdoc/require-param-description": "off",
            "jsdoc/check-tag-names": [
                "warn",
                {
                    definedTags: ["internal"],
                },
            ],

            "deprecation/deprecation": "warn",
        },
    },
    {
        files: ["test/unit/**/*.js"],

        plugins: {
            vitest,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                expect: "readonly",
                describe: "readonly",
                it: "readonly",
                beforeAll: "readonly",
                afterAll: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
            },

            parser: babelParser,
            ecmaVersion: 2020,
            sourceType: "module",

            parserOptions: {
                requireConfigFile: false,
            },
        },

        extends: fixupConfigRules(compat.extends("eslint:recommended")),

        rules: {
            "vitest/valid-expect": "off",
            "vitest/expect-expect": "off",
            "vitest/valid-title": "off",
            "vitest/no-disabled-tests": "warn",
        },
    },
]);
