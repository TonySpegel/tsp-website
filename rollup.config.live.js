/**
 * Copyright © 2022 Tony Spegel
 */

import html from '@web/rollup-plugin-html';
import path from 'path';
import summary from 'rollup-plugin-summary';
import { generateSW } from 'rollup-plugin-workbox';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';

export default {
    input: ['dist/**/*.html'],
    output: {
        dir: 'dist/',
        format: 'es',
        sourcemap: false,
    },
    preserveEntrySignatures: 'strict',
    plugins: [
        html({ extractAssets: false,}),
        nodeResolve(),
        /** Minify JS */
        terser({
            ecma: 2020,
            module: true,
            warnings: true,
        }),
        /** Bundle assets references via import.meta.url */
        importMetaAssets(),
        generateSW({
            globIgnores: ['polyfills/*.js', 'nomodule-*.js'],
            navigateFallback: '/index.html',
            // where to output the generated sw
            swDest: path.join('dist', 'sw.js'),
            // directory to match patterns against to be precached
            globDirectory: path.join('dist'),
            // cache any html js and css by default
            globPatterns: ['**/*.{html,js,css,png,webmanifest}'],
            skipWaiting: true,
            clientsClaim: true,
            runtimeCaching: [
                { urlPattern: 'polyfills/*.js', handler: 'CacheFirst' },
            ],
        }),
        summary(),
    ],
};
