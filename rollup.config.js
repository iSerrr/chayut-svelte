import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import {terser} from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'
import scss from 'rollup-plugin-scss'
import sass from 'rollup-plugin-sass';
import preprocess from 'svelte-preprocess'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import copy from 'rollup-plugin-copy'
import cleaner from 'rollup-plugin-cleaner';

const production = !process.env.ROLLUP_WATCH

function serve() {
    let server

    function toExit() {
        if (server) server.kill(0)
    }

    return {
        writeBundle() {
            if (server) return
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            })

            process.on('SIGTERM', toExit)
            process.on('exit', toExit)
        }
    }
}

const commonPlugins = [
    copy({
        targets: [{src: 'static/*', dest: 'dist/assets'}],
        copyOnce: true
    }),
    svelte({
        preprocess: preprocess({
            sourceMap: true,
            defaults: {
                style: 'scss'
            },
            postcss: {
                plugins: []
            }
        }),
        compilerOptions: {
            // enable run-time checks when not in production
            dev: !production,
        },
        onwarn: (warning, handler) => {
            const {code, frame} = warning
            if (code === 'css-unused-selector')
                return

            handler(warning)
        },
    }),
    resolve({
        browser: true,
        dedupe: ['svelte']
    }),
    commonjs(),
    !production && serve(),
    !production && livereload('dist'),
    production && terser()
]

export default [
    {
        input: 'src/en.js',
        output: {
            sourcemap: true,
            format: 'iife',
            file: `dist/en/main.js`
        },
        plugins: [
            copy({
                targets: [{src: 'sites/en/index.html', dest: 'dist/en'}]
            }),
            ...commonPlugins,
            scss({output: 'dist/en/main.css'})
        ],
        watch: {
            clearScreen: false
        }
    },
    {
        input: 'src/he.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'dist/he/main.js'
        },
        plugins: [
            copy({
                targets: [{src: 'sites/he/index.html', dest: 'dist/he'}]
            }),
            ...commonPlugins,
            scss({output: 'dist/he/main.css'})
        ],
        watch: {
            clearScreen: false
        }
    }]

