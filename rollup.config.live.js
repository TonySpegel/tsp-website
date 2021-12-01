/**
 * Copyright © 2021 Tony Spegel
 */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
    input: 'dist/index.js',
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
    ],
};
