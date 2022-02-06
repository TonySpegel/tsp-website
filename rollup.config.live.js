/**
 * Copyright © 2022 Tony Spegel
 */

import { generateSW } from 'rollup-plugin-workbox';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import replaceHtmlVars from 'rollup-plugin-replace-html-vars';
import summary from 'rollup-plugin-summary';

const serviceWorkerRegistration = `
    <script type="module">
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker
                    .register('/sw.js')
                    .then((registration) => {
                        // Registration was successful
                        console.log(
                            'ServiceWorker registration successful with scope: ',
                            registration.scope
                        );
                    })
                    .catch((errorMessage) => {
                        // registration failed :(
                        console.log(
                            'ServiceWorker registration failed: ',
                            errorMessage
                        );
                    });
            });
        } else {
            console.log('Service workers are not supported.');
        }
    </script>
`;

export default {
    input: 'dist/index.js',
    output: {
        dir: 'dist/',
        format: 'es',
        sourcemap: false,
    },
    preserveEntrySignatures: 'strict',
    plugins: [
        // Replace token to register ServiceWorker
        replaceHtmlVars({
            files: 'dist/**/*.html',
            from: '<!-- SW Registration -->',
            to: serviceWorkerRegistration,
        }),
        nodeResolve(),
        // Minify JS
        terser({
            ecma: 2020,
            module: true,
            warnings: true,
            format: {
                quote_style: 1,
            },
        }),
        // Generate a ServiceWorker
        generateSW({
            globIgnores: ['polyfills/*.js', 'nomodule-*.js'],
            navigateFallback: '/index.html',
            // where to output the generated sw
            swDest: path.join('dist', 'sw.js'),
            // directory to match patterns against to be precached
            globDirectory: path.join('dist'),
            // cache any html js and css by default
            globPatterns: ['**/*.{html,js,mjs,css,png,svg,woff2,webmanifest}'],
            skipWaiting: true,
            clientsClaim: true,
            runtimeCaching: [
                { urlPattern: 'polyfills/*.js', handler: 'CacheFirst' },
            ],
        }),
        summary(),
    ],
};
