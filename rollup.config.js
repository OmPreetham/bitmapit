// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'index.js', // Adjust the input file as necessary
    output: {
        file: 'dist/bundle.js', // Adjust the output file as necessary
        format: 'iife', // or 'cjs', 'esm', etc. based on your needs
        name: 'bitmapit' // Adjust the name as necessary
    },
    plugins: [
        nodeResolve(),
        commonjs()
    ]
};