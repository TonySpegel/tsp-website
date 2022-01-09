/**
 * Copyright © 2022 Tony Spegel
 */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import { generateSW } from 'rollup-plugin-workbox';
import path from 'path';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'dist/index.js',
    output: {
        dir: 'dist/',
        format: 'es',
        sourcemap: false,
    },
    preserveEntrySignatures: 'strict',
    plugins: [
        nodeResolve(),
        /** Minify JS */
        terser({ ecma: 2020, module: true, warnings: true }),
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
        summary(),
    ],
};
