/**
 * Copyright © 2021 Tony Spegel
 */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';

export default {
    input: 'public/index.js',
    output: {
        dir: 'dist/',
        format: 'es',
        sourcemap: false,
    },
    plugins: [
        nodeResolve(),
        replace({
            preventAssignment: true,
        }),
        copy({
            targets: [{ src: 'public/*', dest: 'dist' }],
        }),
    ],
};
