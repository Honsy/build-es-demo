import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const primedBabel = babel({
    babelHelpers: 'runtime',
    babelrc: false,
    exclude: 'node_modules/**',
    compact: false,
    presets: [
      ['@babel/preset-env', {
        useBuiltIns: "usage",
        bugfixes: true,
        loose: true,
        modules: false,
        corejs: { version: "3.8", proposals: true }
      }]
    ],
    plugins: [
      '@babel/plugin-transform-object-assign',
      ['@babel/plugin-transform-runtime', {regenerator: false}]
    ]
});

const globals = {
    browser: {
      'global': 'window',
      'global/window': 'window',
      'global/document': 'document'
    },
    module: {
    },
    test: {
      qunit: 'QUnit',
      qunitjs: 'QUnit',
      sinon: 'sinon'
    }
};

// rollup.config.js
export default {
    input: 'index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      globals: globals.browser
    },
    plugins: [nodeResolve(), primedBabel, commonjs()]
};