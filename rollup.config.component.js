/**
 *
 * Copyright © 2021 Tony Spegel
 */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'dev/index.js',
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
        nodeResolve(),
        terser({
            format: {
                quote_style: 1,
            },
        }),
    ],
};
