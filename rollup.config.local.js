/**
 * 
 * Copyright © 2021 Tony Spegel
 */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'dev/index.js',
    output: {
        format: 'es',
        dir: 'dist/',
    },
    plugins: [
        nodeResolve(), 
        terser({ 
            format: { 
                quote_style: 1, 
            } 
        }),
    ],
};
