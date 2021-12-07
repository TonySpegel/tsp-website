/**
 *
 * Copyright © 2021 Tony Spegel
 */

import html from '@web/rollup-plugin-html';
import { generateSW } from 'rollup-plugin-workbox';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

export default {
    input: 'dist/index.html',
    output: {
        entryFileNames: '[hash].js',
        chunkFileNames: '[hash].js',
        assetFileNames: '[hash][extname]',
        format: 'es',
        dir: 'dist',
    },
    // Controls if Rollup tries to ensure that entry chunks have the same exports as the underlying entry module.
    preserveEntrySignatures: false,
    plugins: [
        html({
            minify: false,
            injectServiceWorker: true,
            serviceWorkerPath: 'dist/sw.js',
        }),
        nodeResolve(),
        terser({
            format: {
                quote_style: 1,
            },
        }),
        generateSW({
            globIgnores: ['polyfills/*.js', 'nomodule-*.js'],
            navigateFallback: '/index.html',
            // where to output the generated sw
            swDest: path.join('dist', 'sw.js'),
            // directory to match patterns against to be precached
            globDirectory: path.join('dist'),
            // cache any html js and css by default
            globPatterns: ['**/*.{html,js,css,webmanifest}'],
            skipWaiting: true,
            clientsClaim: true,
            runtimeCaching: [
                { urlPattern: 'polyfills/*.js', handler: 'CacheFirst' },
            ],
        }),
    ],
};
